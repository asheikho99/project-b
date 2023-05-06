'use client'

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [icon, setIcon] = useState(<></>);

  useEffect(() => {
    setMounted(true);
    setIcon(theme === "light" ? <Moon /> : <Sun />);
  }, [systemTheme, theme]);

  if (!mounted) return null;

  const toggleTheme = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={toggleTheme}
    >
      {icon}
    </Button>
  );
};

export default ThemeButton;