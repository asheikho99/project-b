import React from "react";
import Link from "next/link";

const AboutFooter = () => {
  return (
    <footer className='border-t'>
    <div className="container mx-auto flex max-w-7xl flex-row items-center justify-center space-x-4 py-8">
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
  )
}

export default AboutFooter