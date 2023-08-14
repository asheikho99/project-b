import Link from "next/link";
import React, { HTMLAttributes } from "react";

interface SiteFooterProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const SiteFooter = ({ className }: SiteFooterProps) => (
  <footer className={`border-t ${className}`}>
    <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
      <Link href="/about" className="text-primary/60 hover:text-primary">
        About this project
      </Link>
      <Link
        href="https://github.com/asheikho99/project-b"
        target="_blank"
        className="text-primary/60 hover:text-primary"
      >
        {" "}
        View source code
      </Link>
    </div>
  </footer>
);

export default SiteFooter;
