import { db } from "@/db";
import { notFound, redirect } from "next/navigation";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page(props: PageProps) {
  const event = await db.event.findUnique({
    where: { id: Number(props.params.id) },
  });

  if (!event) {
    return notFound();
  }

  const addRegistration = async (formData: FormData) => {
    "use server";

    const registration = await db.registration.create({
      data: {
        name: formData.get("name")?.toString() as string,
        email: formData.get("email")?.toString() as string,
        how_heard: formData.get("howHeard")?.toString() as string,
        event: {
          connect: {
            id: event.id,
          },
        },
      },
    });
    console.log(registration);

    redirect(`/events/${event.id}/registrations`);
  };

  return (
    <form action={addRegistration}>
      <div className="bg-white text-black shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="-mx-3 md:flex mb-6">
          <h1 className="text-gray-800 font-semibold text-xl mb-2">
            Registration for Hackathon
          </h1>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4"
              id="name"
              type="text"
              placeholder="Your name"
              name="name"
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
              id="email"
              type="email"
              placeholder="youremail@domain.com"
              name="email"
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="how-heard"
            >
              How heard
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                id="how-heard"
                name="howHeard"
              >
                <option>Pick one</option>
                <option value="friend">From a friend</option>
                <option value="colleague">From a colleague</option>
                <option value="google">From a search engine</option>
                <option value="facebook">From social media</option>
                {/* Additional options would go here */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-grey-darker">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615l-4.415 4.242c-0.408 0.392-1.073 0.392-1.481 0l-4.418-4.242c-0.407-0.418-0.436-1.17 0-1.615z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="-mx-3 md:flex mt-6">
          <div className="md:w-full px-3">
            <button
              className="md:w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Create Registration
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
