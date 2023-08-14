"use client";

import React, { useState, useEffect } from "react";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

const SiteNavCta = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <Link
      href={"/login"}
      className={`${buttonVariants({ variant: "default" })}`}
    >
      Get Started
    </Link>
  ) : (
    <Skeleton className="h-10 w-28" />
  );
};

export default SiteNavCta;
