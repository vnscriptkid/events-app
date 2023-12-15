import Link from "next/link";

export const Header = () => {
  return (
    <div className="bg-blue-500 p-4 text-white text-2xl font-bold flex">
      <span>EVENTS</span>
      <div className="ml-auto font-light">
        <Link href={"/events"}>All Events</Link>
      </div>
    </div>
  );
};
