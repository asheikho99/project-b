import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const RootPage = async () => {
  const session = await getServerSession();
  if (session) redirect("/dashboard");
  if (!session) redirect("/login");
  return <></>;
};

export default RootPage;
