"use client";

import { createEvent } from "@/actions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormState } from "react-dom";

export const EventFormCreate = () => {
  const [formState, action] = useFormState(createEvent as any, { message: "" });

  return (
    <div className="mt-auto p-4 text-black border-2 rounded-lg shadow-lg">
      <form action={action}>
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
            name="name"
            className="bg-gray-100 rounded-md px-4 py-2 focus:outline-none"
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
            name="description"
            className="bg-gray-100 rounded-md px-4 py-2 focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="edit-event-location"
            className="text-gray-600 font-semibold mb-1"
          >
            Event location
          </label>
          <input
            type="text"
            id="edit-event-location"
            name="location"
            className="bg-gray-100 rounded-md px-4 py-2 focus:outline-none"
          />
        </div>

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
            name="price"
            className="bg-gray-100 rounded-md px-4 py-2 focus:outline-none"
          />
        </div>

        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <DatePicker
              selected={new Date()}
              name="startsAt"
              onChange={(date) => console.log(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
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
