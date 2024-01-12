import { Button } from "@nextui-org/button";
import * as actions from "@/actions";
import { auth } from "@/auth";
import { Profile } from "@/components/Profile";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      {/* <form action={actions.signIn}>
        <Button type="submit">Signin</Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">Signout</Button>
      </form> */}
      {/* {session && (
        <div>
          <code>{JSON.stringify(session.user)}</code>
        </div>
      )} */}
      {/* <Profile /> */}
      {/* <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-md mb-2">
        <div>
          <div className="text-black text-lg font-semibold">BugSmash</div>
          <div className="text-gray-500">July 10 at 12:00 am in Denver, CO</div>
          <div className="text-gray-700">
            Join us for a fun evening of bug...
          </div>
        </div>
        <span className="inline-block bg-orange-200 text-orange-700 py-1 px-3 rounded-full text-xs font-bold">
          FREE
        </span>
      </div>

      <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-md">
        <div>
          <div className="text-black text-lg font-semibold">Hackathon</div>
          <div className="text-gray-500">July 31 at 12:00 am in Austin, TX</div>
          <div className="text-gray-700">Got a killer app idea youve...</div>
        </div>
        <span className="inline-block bg-orange-200 text-orange-700 py-1 px-3 rounded-full text-xs font-bold">
          $15
        </span>
      </div> */}
    </div>
  );
}
