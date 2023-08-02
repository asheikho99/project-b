import React from "react";
import { getCatgories } from "@/lib/categories";
import Category from "./category";

const Categories = () => {
  const categories = getCatgories();

  return (
    <div className="flex h-full flex-col space-y-2 overflow-y-scroll pr-4">
      {categories.map((category) => {
        return <Category key={category.title} category={category} />;
      })}
    </div>
  );
};

export default Categories;
