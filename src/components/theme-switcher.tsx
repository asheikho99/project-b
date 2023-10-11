"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Skeleton } from "./ui/skeleton";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  switch (theme) {
    case "dark":
      return (
        <Button onClick={() => setTheme("light")} variant={"ghost"}>
          <Sun />
        </Button>
      );
    case "light":
      return (
        <Button onClick={() => setTheme("dark")} variant={"ghost"}>
          <Moon />
        </Button>
      );
  }
};

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? <ToggleTheme /> : <Skeleton className="h-10 w-14" />;
};

export default ThemeSwitcher;
