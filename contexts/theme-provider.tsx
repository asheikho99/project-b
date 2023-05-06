"use client";

import React from "react";
import { ThemeProvider as TProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <TProvider {...props} attribute="class">
      {children}
    </TProvider>
  );
};

export default ThemeProvider;
