import React from "react";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "./ui/skeleton";

const User = async () => {
  const session = await getServerSession();
  const user = session?.user;

  return session ? (
    <Avatar>
      <AvatarImage src={user?.image as string} />
      <AvatarFallback>
        <Skeleton />
      </AvatarFallback>
    </Avatar>
  ) : (
    <p>Not Logged in</p>
  );
};

export default User;
