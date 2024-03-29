import { db } from "@/db";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page(props: PageProps) {
  // find event including registrations
  // TODO: check actual sql query
  const event = await db.event.findUnique({
    where: { id: Number(props.params.id) },
    include: {
      // include user for each registration
      registrations: { include: { user: true } },
    },
  });

  return (
    <ul className="text-black">
      {/* <li>Registration 1</li>
      <li>Registration 2</li>
      <li>Registration 3</li> */}
      {event?.registrations.map((registration) => (
        <li key={registration.id}>
          {registration.user.name} | {registration.user.email} |{" "}
          {registration.how_heard}
        </li>
      ))}
    </ul>
  );
}
