import { db } from "@/db";
import Link from "next/link";

export default async function Events() {
  const events = await db.event.findMany();

  console.table(events);

  return (
    <div>
      {events.map((event) => (
        <div
          key={event.id}
          className="flex justify-between items-center p-4 bg-white shadow-md rounded-md mb-2"
        >
          <div>
            <div className="text-black text-lg font-semibold">
              <Link href={`/events/${event.id}`}>{event.name}</Link>
            </div>
            <div className="text-gray-500">{event.starts_at.toString()}</div>
            <div className="text-gray-700">{event.description}</div>
          </div>
          <span className="inline-block bg-orange-200 text-orange-700 py-1 px-3 rounded-full text-xs font-bold">
            {event.price.toString()}
          </span>
        </div>
      ))}
      {/* round button at bottom right corner of screen to add event */}
      <Link
        href="/events/new"
        className="fixed bottom-0 right-0 m-4 w-12 h-12 bg-blue-500 rounded-full flex justify-center items-center text-white text-2xl hover:bg-blue-700"
      >
        +
      </Link>
    </div>
  );
}
