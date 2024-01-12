"use server";

import { db } from "@/db";

import { redirect } from "next/navigation";
import * as auth from "@/auth";
import { z, typeToFlattenedError } from "zod";

type updateEventProps = {
  id: number;
  name: string;
  description: string;
  //   starts_at: Date;
  //   location: string;
};

export const updateEvent = async (props: updateEventProps) => {
  await db.event.update({
    where: { id: props.id },
    data: {
      name: props.name,
      description: props.description,
      //   starts_at: props.starts_at,
    },
  });

  redirect("/events/" + props.id);
};

const createEventSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  location: z.string().min(1),
  starts_at: z
    .string()
    .transform((x) => new Date(x))
    .pipe(z.date()),
  price: z
    .string()
    .transform((x) => {
      return typeof x !== "number" ? Number(x) : x;
    })
    .pipe(z.number().positive()),
});

type createEventFormState = {
  errors: typeToFlattenedError<
    z.infer<typeof createEventSchema>
  >["fieldErrors"] & {
    _form?: string[];
  };
};

export const createEvent = async (
  formState: createEventFormState,
  formData: FormData
): Promise<createEventFormState> => {
  const result = createEventSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    starts_at: formData.get("starts_at"),
    location: formData.get("location"),
    price: formData.get("price"),
  });

  if (!result.success) {
    console.error("validation error", result.error.flatten().fieldErrors);
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth.auth();

  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be signed in to create an event"],
      },
    };
  }

  await db.event.create({
    data: {
      name: result.data.name,
      description: result.data.description,
      starts_at: new Date(result.data.starts_at).toISOString(),
      location: result.data.location,
      price: result.data.price,
      user_id: session.user.id,
    },
  });

  redirect("/events");
};

export const deleteEvent = async (id: number) => {
  await db.event.delete({
    where: { id },
  });

  redirect("/events");
};

type addRegistrationProps = {
  eventId: number;
  how_heard: string;
  user_id: string;
};

export const addRegistration = async (props: addRegistrationProps) => {
  await db.registration.create({
    data: {
      event_id: props.eventId,
      user_id: props.user_id,
      how_heard: props.how_heard,
    },
  });

  redirect("/events/" + props.eventId + "/registrations");
};

export async function signIn() {
  return auth.signIn("github");
}

export async function signOut() {
  return auth.signOut();
}
