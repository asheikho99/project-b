import React from 'react';
import ThemeButton from './theme-button';
import AuthButton from './auth-button';
import Link from 'next/link';

const Navbar = async () => {
    return (
        <div className='flex flex-row w-full border-b'>
            <div className='flex flex-row justify-between items-center container p-4'>
                <Link href='/' className='font-black'>Project B</Link>
                <div className='flex flex-row space-x-2'>
                    <ThemeButton />
                    {/* @ts-expect-error Server Component */}
                    <AuthButton />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
