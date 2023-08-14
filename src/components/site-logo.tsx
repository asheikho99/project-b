import React from 'react'
import Link from "next/link";
import { Codesandbox } from "lucide-react";

const SiteLogo = () => {
  return (
    <Link
          href={"/"}
          className="flex flex-row items-center space-x-2 text-2xl font-bold"
        >
          <Codesandbox />
          <span>Project-B</span>
        </Link>
  )
}

export default SiteLogo