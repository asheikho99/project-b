import React from "react";
import Link from "next/link";

const SiteNav = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex flex-row py-8 items-center justify-between">
        <Link href={"/"} className="font-bold">
          Project-B
        </Link>
      </div>
    </nav>
  );
};

export default SiteNav;
