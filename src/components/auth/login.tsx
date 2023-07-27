"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";

import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <Button
    variant={'secondary'}
      onClick={() => {
        setIsLoading(true);
        signIn("github", { callbackUrl: "/" });
      }}
      disabled={isLoading}
    >
      <span>{isLoading ? <Loader2 className="animate-spin" /> : "Login"}</span>
    </Button>
  );
};

export default Login;
