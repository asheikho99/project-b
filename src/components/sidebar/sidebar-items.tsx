import React from "react";
import { getCatgories } from "@/lib/sidebar-categories";
import Category from "./sidebar-item";

const SidebarItems = () => {
  const categories = getCatgories();

  return (
    <div className="grid items-start gap-2 overflow-y-scroll">
      {categories.map((category) => {
        return <Category key={category.title} category={category} />;
      })}
    </div>
  );
};

export default SidebarItems;
