import React from "react";

const Sidebar = () => {
  return (
    <aside className="sticky top-0 col-span-2 hidden h-screen min-h-0 flex-col border-r-[1px] border-r-secondary pr-2 md:flex">
      <div className="h-full overflow-y-scroll">
        <p>Sidebar content</p>
      </div>
    </aside>
  );
};

export default Sidebar;
