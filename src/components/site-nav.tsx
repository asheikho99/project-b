import React from "react";
import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";

const SiteNav = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex max-w-7xl flex-row items-center justify-between py-8">
        <Link href={"/"} className="font-bold">
          Project-B
        </Link>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default SiteNav;
