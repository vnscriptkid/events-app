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
