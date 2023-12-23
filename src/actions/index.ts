"use server";

import { db } from "@/db";

import { redirect } from "next/navigation";
import * as auth from "@/auth";

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

export const createEvent = async (
  formState: { message: string },
  formData: FormData
) => {
  const name = formData.get("name");
  const description = formData.get("description");
  const starts_at = formData.get("starts_at");
  const location = formData.get("location");
  const price = formData.get("price");

  console.log("name", name);
  console.log("description", description);
  console.log("starts_at", starts_at);
  console.log("location", location);
  console.log("price", price);

  if (!name || !description || !starts_at || !location || !price) {
    console.error("missing fields");
    return;
  }

  await db.event.create({
    data: {
      name: name.toString(),
      description: description.toString(),
      starts_at: new Date(starts_at.toString()).toISOString(),
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
  how_heard: string;
};

export const addRegistration = async (props: addRegistrationProps) => {
  await db.registration.create({
    data: {
      event_id: props.eventId,
      name: props.name,
      email: props.email,
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
