"use client";

import React, { useEffect, useState } from "react";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

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

  return !mounted ? <Button variant={"ghost"}></Button> : <ToggleTheme />;
};

export default ThemeSwitcher;
