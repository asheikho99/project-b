'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

const ThemeButton = () => {
    const { theme, setTheme } = useTheme();
    const [icon, setIcon] = useState(<Sun />);

    useEffect(() => {
        setIcon(theme === 'dark' ? <Sun /> : <Moon />);
    }, [theme]);

    return (
        <Button
            variant='ghost'
            aria-label='Toggle Dark Mode'
            type='button'
            onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
            }}>
            {icon}
        </Button>
    );
};

export default ThemeButton;