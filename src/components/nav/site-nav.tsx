import React from "react";
import SiteLogo from "../site-logo";
import SiteNavControls from "./site-nav-controls";

const SiteNav = async () => {
  return (
    <header className="border-b">
      <div className="container mx-auto flex flex-row items-center justify-between py-3">
        <SiteLogo />
        <SiteNavControls />
      </div>
    </header>
  );
};

export default SiteNav;
