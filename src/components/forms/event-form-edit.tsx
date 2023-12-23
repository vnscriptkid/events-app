"use client";

import { updateEvent } from "@/actions";
import { Event } from "@prisma/client";
import { useState } from "react";

export const EventFormEdit = (props: { event: Event }) => {
  const [name, setName] = useState(props.event.name);
  const [description, setDescription] = useState(props.event.description);
  const [price, setPrice] = useState(props.event.price);
  //   const [startsAt, setStartsAt] = useState(props.event.startsAt);
  // const [location, setLocation] = useState(props.event.location);

  const updateEventAction = updateEvent.bind(null, {
    id: props.event.id,
    name,
    description,
    // price,
  });

  return (
    <div className="mt-auto p-4 text-black border-2 rounded-lg shadow-lg">
      <form action={updateEventAction}>
        <div className="flex flex-col">
          <label
            htmlFor="edit-event-name"
            className="text-gray-600 font-semibold mb-1"
          >
            Event name
          </label>
          <input
            type="text"
            id="edit-event-name"
            className="bg-gray-100 rounded-md px-4 py-2 focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="edit-event-desc"
            className="text-gray-600 font-semibold mb-1"
          >
            Event description
          </label>
          <input
            type="text"
            id="edit-event-desc"
            className="bg-gray-100 rounded-md px-4 py-2 focus:outline-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* <div className="flex flex-col">
        <label
          htmlFor="edit-event-location"
          className="text-gray-600 font-semibold mb-1"
        >
          Event location
        </label>
        <input
          type="text"
          id="edit-event-location"
          className="bg-gray-100 rounded-md px-4 py-2 focus:outline-none"
        />
      </div> */}

        <div className="flex flex-col">
          <label
            htmlFor="edit-event-price"
            className="text-gray-600 font-semibold mb-1"
          >
            Event price
          </label>
          <input
            type="number"
            id="edit-event-price"
            className="bg-gray-100 rounded-md px-4 py-2 focus:outline-none"
            value={price as any}
            onChange={(e) => setPrice(e.target.value as any)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 mt-2 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
