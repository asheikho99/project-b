import Link from "next/link";
import UserMenu from "./user-menu";
import ThemeSwitcher from "./theme-switcher";

const GlobalNavbar = async () => {
  return (
    <div className="flex flex-row">
      <div className="container mx-auto flex flex-row justify-between items-center py-4">
        <Link href={"/"} className="text-3lx font-bold">
          Project B
        </Link>
        <div className="flex flex-row space-x-4 items-center justify-end">
        <ThemeSwitcher />
        <UserMenu />
        </div>
      </div>
    </div>
  );
};

export default GlobalNavbar;
