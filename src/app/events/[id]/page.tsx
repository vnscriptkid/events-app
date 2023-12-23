import { deleteEvent } from "@/actions";
import { db } from "@/db";
import Image from "next/image";
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
    <div>
      <div className="flex items-start">
        <Image
          alt="event-image"
          width={200}
          height={200}
          src="https://yoloeventcompany.sg/wp-content/uploads/2023/07/One-EY-Fest-Main-homepage.jpg"
        />
        <div className="ml-4 flex flex-col items-start">
          <h1 className="text-3xl font-bold text-black">{event?.name}</h1>
          <p className="text-xl text-gray-700">{String(event?.price)}</p>
          <p className="text-gray-500">{String(event?.startsAt)}</p>
          <p className="mt-2 text-black">{event?.description}</p>
          <button className="bg-green-600 p-2 rounded text-gray-100 hover:bg-green-700 mt-4">
            <Link href={`/events/${event?.id}/registrations/new`}>
              REGISTER
            </Link>
          </button>

          <Link
            className="text-blue-500 hover:text-blue-700"
            href={`/events/${event?.id}/registrations`}
          >
            Who registered?
          </Link>
        </div>
      </div>
      <div className="px-4 py-4 sm:px-6 flex justify-center space-x-3 border-t-2 mt-8 border-dotted">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <Link href={`/events/${event?.id}/edit`}>Edit</Link>
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
