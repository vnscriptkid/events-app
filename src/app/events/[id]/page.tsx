import { deleteEvent } from "@/actions";
import { db } from "@/db";
import Link from "next/link";

type EventDetailPageProps = {
  params: {
    id: string;
  };
};

export default async function EventDetailPage(props: EventDetailPageProps) {
  console.log("props: ", props);

  const event = await db.event.findUnique({
    where: { id: Number(props.params.id) },
  });

  console.log(event);

  const deleteEventAction = deleteEvent.bind(null, event?.id as number);

  return (
    <div className="p-4">
      <div className="flex">
        <h1 className="text-3xl font-bold text-black">{event?.name}</h1>
        {/* edit event link to the right */}

        <div className="ml-auto text-black">
          <Link href={`/events/${event?.id}/edit`}>Edit Event</Link>
        </div>
      </div>
      <p className="text-xl text-gray-700">{String(event?.price)}</p>
      <p className="text-gray-500">{String(event?.startsAt)}</p>
      <p className="mt-2 text-black">{event?.description}</p>
      <div className="px-4 py-4 sm:px-6 flex justify-end space-x-3">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Edit
        </button>
        <form action={deleteEventAction}>
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}
