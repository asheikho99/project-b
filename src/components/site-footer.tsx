import Link from "next/link";
import React, { HTMLAttributes } from "react";

interface SiteFooterProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const SiteFooter = ({ className }: SiteFooterProps) => (
  <footer className={`border-t ${className}`}>
    <div className="container mx-auto flex max-w-7xl flex-row items-center justify-center space-x-4 py-8">
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
