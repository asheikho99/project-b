"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Skeleton } from "../ui/skeleton";
import { type Category } from "@/lib/sidebar-categories";

const SidebarItem = ({ category }: { category: Category }) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  const pathname = usePathname().split("/").at(-1);

  return mounted ? (
    <Link
      href={category.href}
      className={`rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary
       ${pathname == category.title.toLowerCase() ? "bg-secondary" : ""}`}
    >
      {category.title}
    </Link>
  ) : (
    <Skeleton className="h-10 px-4 py-2" />
  );
};

export default SidebarItem;
