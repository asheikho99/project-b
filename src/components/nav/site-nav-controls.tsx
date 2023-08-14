import React from "react";
import { getServerSession } from "next-auth";
import ThemeSwitcher from "../theme-switcher";
import UserNavMenu from "./user-nav-menu";
import SiteNavCta from "./site-nav-cta";

const SiteNavControls = async () => {
  const session = await getServerSession();

  return (
    <div className="flex flex-row items-center justify-center space-x-4">
      <ThemeSwitcher />
      {session ? <UserNavMenu /> : <SiteNavCta />}
    </div>
  );
};

export default SiteNavControls;
