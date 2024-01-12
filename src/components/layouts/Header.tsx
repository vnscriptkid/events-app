import { paths } from "@/path";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import * as actions from "@/actions";
import { auth } from "@/auth";
import { Fragment } from "react";

export const Header = async () => {
  const session = await auth();

  const isAuth = session && session.user;

  return (
    <div className="bg-blue-500 p-4 text-white text-2xl font-bold flex">
      <Link href={paths.home()}>
        <span>EVENTS</span>
      </Link>
      <div className="ml-auto font-light flex space-x-2 items-center">
        {/* <Link href={"/events"}>All Events</Link> */}
        {isAuth ? (
          <Fragment>
            <div>Hi {session?.user?.name}!</div>
            <form action={actions.signOut}>
              <Button type="submit">Signout</Button>
            </form>
          </Fragment>
        ) : (
          <form action={actions.signIn}>
            <Button type="submit">Signin</Button>
          </form>
        )}
      </div>
    </div>
  );
};
