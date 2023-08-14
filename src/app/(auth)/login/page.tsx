import React from "react";
import Link from "next/link";
import LoginButton from "@/components/nav/auth/login-button";
import { buttonVariants } from "@/components/ui/button";
import { Info } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="container mx-auto flex w-full max-w-lg flex-col justify-center space-y-2">
      <Link
        className={`absolute left-4 top-4 z-10 md:left-8 md:top-8 space-x-2 ${buttonVariants(
          { variant: "ghost" },
        )}`}
        href={"/about"}
      >
        <Info />
        <span>About this site</span>
      </Link>
      <p className="self-center text-2xl font-semibold">Welcome Back</p>
      <LoginButton />
    </div>
  );
};

export default LoginPage;
