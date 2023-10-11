import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getServerSession } from "next-auth";
import { Skeleton } from "./ui/skeleton";

const User = async () => {
  const session = await getServerSession();
  const user = session?.user;
  return (
    <Avatar>
      <AvatarImage src={user?.image as string} />
      <AvatarFallback>
        <Skeleton />
      </AvatarFallback>
    </Avatar>
  );
};

export default User;
