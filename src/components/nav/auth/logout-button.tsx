"use client";

import React, { useState } from "react";
import { signOut } from "next-auth/react";

import { ArrowLeftToLine, Loader2 } from "lucide-react";

const LogoutButton = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <button
      className="h-full w-full text-left flex flex-row space-x-2"
      onClick={() => {
        signOut({ callbackUrl: `${window.location.origin}/login` });
        setIsLoading(true);
      }}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <ArrowLeftToLine />
      )}
      <span>Logout</span>
    </button>
  );
};

export default LogoutButton;
