import React from 'react';
import ThemeButton from './theme-button';
import AuthButton from './auth-button';

const Navbar = async () => {
    return (
        <div className='flex flex-row w-full border-b'>
            <div className='flex flex-row justify-between items-center container p-4'>
                <h1>Project B</h1>
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
