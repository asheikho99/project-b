'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { signIn } from 'next-auth/react';

import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';

const Login = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <Button
            variant={'outline'}
            className='space-x-2'
            onClick={() => {
                signIn('github');
                setIsLoading(true);
            }}
            disabled={isLoading}>
            {isLoading ? (
                <Loader2 className='animate-spin' />
            ) : (
                <Image
                    src='/github.svg'
                    alt='Vercel Logo'
                    className='dark:invert'
                    width={24}
                    height={24}
                    priority
                />
            )}
            <span>Login</span>
        </Button>
    );
};

export default Login;
