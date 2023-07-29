import React from "react";
import Login from "@/components/auth/login";

const LoginPage = () => {
  return (
    <div className="container mx-auto mt-auto flex w-full max-w-lg flex-col justify-center space-y-2">
      <p className="self-center text-2xl font-semibold">Welcome Back</p>
      <Login />
    </div>
  );
};

export default LoginPage;
