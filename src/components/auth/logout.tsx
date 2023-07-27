"use client";

import React, { useState } from "react";
import { signOut } from "next-auth/react";

import { Loader2 } from "lucide-react";

const Logout = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <button
      className="h-full w-full text-left"
      onClick={() => {
        signOut();
        setIsLoading(true);
      }}
      disabled={isLoading}
    >
      <span>{isLoading ? <Loader2 className="animate-spin" /> : "Logout"}</span>
    </button>
  );
};

export default Logout;
