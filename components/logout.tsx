'use client';

import React, { useState } from 'react';

import { signOut } from 'next-auth/react';

import { Button } from './ui/button';
import { Loader2, LogOut } from 'lucide-react';

const Logout = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <Button
            variant={'outline'}
            className='space-x-2'
            onClick={() => {
                signOut();
                setIsLoading(true);
            }}
            disabled={isLoading}>
            {isLoading ? <Loader2 className='animate-spin' /> : <LogOut />}
            <span>Log out</span>
        </Button>
    );
};

export default Logout;
