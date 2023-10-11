import Link from "next/link";
import UserMenu from "./user-menu";

const GlobalNavbar = async () => {
  return (
    <div className="flex flex-row">
      <div className="container mx-auto flex flex-row justify-between items-center py-4">
        <Link href={"/"} className="text-3lx font-bold">
          Project B
        </Link>
        <UserMenu />
      </div>
    </div>
  );
};

export default GlobalNavbar;
