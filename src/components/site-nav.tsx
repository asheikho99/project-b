import React from "react";
import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";
import User from "./user";

const SiteNav = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex max-w-7xl flex-row items-center justify-between py-8">
        <Link href={"/"} className="font-bold">
          Project-B
        </Link>
        <div className="flex flex-row items-center justify-center space-x-4">
          <ThemeSwitcher />
          <User />
        </div>
      </div>
    </nav>
  );
};

export default SiteNav;
