import React from "react";
import SidebarItems from "./sidebar-items";

const SidebarNav = () => {
  return (
    <aside className="hidden w-[200px] flex-col md:flex h-screen sticky top-0 min-h-0 ">
      <SidebarItems />
    </aside>
  );
};

export default SidebarNav;
