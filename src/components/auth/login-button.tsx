"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Github, Loader2 } from "lucide-react";

const LoginButton = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <Button
      variant="default"
      size={"lg"}
      onClick={() => {
        setLoading(true);
        signIn("github", { callbackUrl: "/dashboard" });
      }}
      disabled={isLoading}
      className="flex flex-row space-x-2">
      <span>{isLoading ? <Loader2 className="animate-spin" /> : <Github />}</span>
      <span>Login with GitHub</span>
    </Button>
  );
};

export default LoginButton;
