"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { type Category as CategoryType } from "@/lib/categories";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

const Category = ({ category }: { category: CategoryType }) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  const pathname = usePathname().split("/").at(-1);

  return mounted ? (
    <Link
      href={category.href}
      className={`${buttonVariants({
        variant: pathname == category.title.toLowerCase() ? "default" : "ghost",
      })}`}
    >
      {category.title}
    </Link>
  ) : (
    <Skeleton className="h-10 px-4 py-2" />
  );
};

export default Category;
