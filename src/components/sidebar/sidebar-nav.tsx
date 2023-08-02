import React from "react";
import Categories from "./categories";

const SidebarNav = () => {
  return (
    <aside className="sticky top-0 col-span-2 hidden h-screen min-h-0 flex-col border-r-[1px] border-r-secondary pr-2 md:flex">
      <Categories />
    </aside>
  );
};

export default SidebarNav;
