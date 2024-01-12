import { auth } from "@/auth";
import { EventFormCreate } from "@/components/forms/event-form-create";
import { redirect } from "next/navigation";

type PageProps = {};

export default async function Page(props: PageProps) {
  const session = await auth();

  if (!session || !session.user) {
    return redirect("/");
  }

  return <EventFormCreate />;
}
