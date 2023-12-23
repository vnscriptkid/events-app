"use client";

import { useSession } from "next-auth/react";

export const Profile = () => {
  const session = useSession();

  if (session.data?.user) {
    return <div>user: {JSON.stringify(session.data.user)}</div>;
  }

  return <div>no user</div>;
};
