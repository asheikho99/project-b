"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const NavAuthButton = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        setIsLoading(true);
        router.push("/login");
      }}
      variant={"default"}
      disabled={isLoading}
    >
      <span>Get Started</span>
    </Button>
  );
};

export default NavAuthButton;
