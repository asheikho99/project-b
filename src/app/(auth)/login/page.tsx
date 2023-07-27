import Login from "@/components/auth/login";
import React from "react";

const LoginPage = () => {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col space-y-2">
      <p className="self-center font-semibold">Welcome Back!</p>
      <Login />
    </div>
  );
};

export default LoginPage;
