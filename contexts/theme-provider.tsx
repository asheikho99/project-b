'use client';

import React from 'react';
import { ThemeProvider as TProvider } from 'next-themes';

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    return <TProvider attribute='class'>{children}</TProvider>;
};

export default ThemeProvider;
