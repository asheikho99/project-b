import React from 'react';
import ThemeButton from './theme-button';

const Navbar = () => {
    return (
        <div className='flex flex-row w-full border-b'>
            <div className='flex flex-row justify-between items-center container p-4'>
                <h1>Project B</h1>
                <ThemeButton />
            </div>
        </div>
    );
};

export default Navbar;
