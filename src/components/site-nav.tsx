import React from "react";
import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";
import UserNavMenu from "./user-nav-menu";
import { getServerSession } from "next-auth";
import NavAuthButton from "./auth/nav-auth-button";
import { Codesandbox } from "lucide-react";

const SiteNav = async () => {
  const session = await getServerSession();

  return (
    <nav className="border-b">
      <div className="container mx-auto flex max-w-7xl flex-row items-center justify-between py-8">
        <Link href={"/"} className="text-2xl font-bold flex flex-row space-x-2 items-center">
          <Codesandbox />
          <span>Project-B</span>
        </Link>
        <div className="flex flex-row items-center justify-center space-x-4">
          <ThemeSwitcher />
          {session ? <UserNavMenu /> : <NavAuthButton />}
        </div>
      </div>
    </nav>
  );
};

export default SiteNav;
