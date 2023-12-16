"use server";

import { db } from "@/db";

import { redirect } from "next/navigation";

type updateEventProps = {
  id: number;
  name: string;
  description: string;
  //   startsAt: Date;
  //   location: string;
};

export const updateEvent = async (props: updateEventProps) => {
  await db.event.update({
    where: { id: props.id },
    data: {
      name: props.name,
      description: props.description,
      //   startsAt: props.startsAt,
    },
  });

  redirect("/events/" + props.id);
};

export const createEvent = async (
  formState: { message: string },
  formData: FormData
) => {
  const name = formData.get("name");
  const description = formData.get("description");
  const startsAt = formData.get("startsAt");
  const location = formData.get("location");
  const price = formData.get("price");

  console.log("name", name);
  console.log("description", description);
  console.log("startsAt", startsAt);
  console.log("location", location);
  console.log("price", price);

  if (!name || !description || !startsAt || !location || !price) {
    return;
  }

  await db.event.create({
    data: {
      name: name.toString(),
      description: description.toString(),
      startsAt: new Date(startsAt.toString()).toISOString(),
      location: location.toString(),
      price: price.toString(),
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
  name: string;
  email: string;
  howHeard: string;
};

export const addRegistration = async (props: addRegistrationProps) => {
  await db.registration.create({
    data: {
      eventId: props.eventId,
      name: props.name,
      email: props.email,
      howHeard: props.howHeard,
    },
  });

  redirect("/events/" + props.eventId + "/registrations");
};
