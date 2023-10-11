"use client";

import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { ArrowLeftToLine, Loader2 } from "lucide-react";

const LogoutButton = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <button
      className="relative flex flex-row justify-start cursor-default select-none items-center rounded-sm text-sm outline-none transition-colors focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 w-full"
      onClick={() => {
        signOut({ callbackUrl: `${window.location.origin}/login` });
        setIsLoading(true);
      }}
      disabled={isLoading}>
      {isLoading ? <Loader2 className="animate-spin h-4" /> : <ArrowLeftToLine className="h-4"/>}
      <span>Logout</span>
    </button>
  );
};

export default LogoutButton;
