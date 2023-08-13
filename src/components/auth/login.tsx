"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";

import { Button } from "../ui/button";
import { Github, Loader2 } from "lucide-react";

const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <Button
      variant={"secondary"}
      size={"lg"}
      onClick={() => {
        setIsLoading(true);
        signIn("github", { callbackUrl: "/dashboard" });
      }}
      disabled={isLoading}
    >
      <div className="flex flex-row items-center justify-center space-x-2">
        {isLoading ? <Loader2 className="animate-spin" /> : <></>}
        <span>Continue with </span>
        <Github />
      </div>
    </Button>
  );
};

export default Login;
