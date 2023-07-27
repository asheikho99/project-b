"use client";

import React, { useState } from "react";
import { signOut } from "next-auth/react";

import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

const Logout = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <Button
      onClick={() => {
        signOut();
        setIsLoading(true);
      }}
      disabled={isLoading}
    >
      <span>{isLoading ? <Loader2 className="animate-spin" /> : "Logout"}</span>
    </Button>
  );
};

export default Logout;
