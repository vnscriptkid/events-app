"use client";

import { createEvent } from "@/actions";
import { Button, Input } from "@nextui-org/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormState } from "react-dom";

export const EventFormCreate = () => {
  const [formState, action] = useFormState(createEvent, {
    errors: {},
  });

  return (
    <div className="mt-auto p-8 text-black border-2 rounded-lg shadow-lg">
      <form action={action} className="flex flex-col gap-4">
        <Input
          name="name"
          label="Event name"
          placeholder="jazz festival"
          isInvalid={!!formState.errors.description}
          errorMessage={formState.errors.description?.join(", ")}
        />

        <Input
          name="description"
          label="Event description"
          placeholder="join us for a fun evening of jazz music"
          isInvalid={!!formState.errors.description}
          errorMessage={formState.errors.description?.join(", ")}
        />

        <Input
          name="location"
          label="Event location"
          placeholder="123 Main St, Denver, CO"
          isInvalid={!!(formState.errors as any).location}
          errorMessage={(formState.errors as any).location?.join(", ")}
        />

        <Input
          name="price"
          label="Event price"
          placeholder="100.00"
          isInvalid={!!formState.errors.price}
          errorMessage={formState.errors.price?.join(", ")}
        />

        <DatePicker
          selected={new Date()}
          name="starts_at"
          onChange={(date) => console.log(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        <Button type="submit" size="lg" color="primary">
          Create Event
        </Button>
      </form>
    </div>
  );
};
