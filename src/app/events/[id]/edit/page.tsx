import { auth } from "@/auth";
import { EventFormEdit } from "@/components/forms/event-form-edit";
import { db } from "@/db";
import { notFound, redirect } from "next/navigation";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page(props: PageProps) {
  const session = await auth();

  if (!session || !session.user) {
    return redirect("/");
  }

  const event = await db.event.findUnique({
    where: { id: Number(props.params.id) },
  });

  if (!event) {
    return notFound();
  }

  return <EventFormEdit event={event} />;
}
