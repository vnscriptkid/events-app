import { db } from "@/db";

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
            <div className="text-black text-lg font-semibold">{event.name}</div>
            <div className="text-gray-500">{event.startsAt.toString()}</div>
            <div className="text-gray-700">{event.description}</div>
          </div>
          <span className="inline-block bg-orange-200 text-orange-700 py-1 px-3 rounded-full text-xs font-bold">
            {event.price.toString()}
          </span>
        </div>
      ))}
    </div>
  );
}
