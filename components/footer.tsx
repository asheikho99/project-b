import React from 'react';
import Image from 'next/image';

import Link from 'next/link';

const Footer = () => {
    return (
        <div className='border-t'>
            <div className='container p-8 flex flex-row items-center justify-center space-x-4'>
                <Link
                    className='flex flex-row space-x-2'
                    href={'https://github.com/asheikho99/project-b'}
                    target='_blank'>
                    <Image
                        src='/github.svg'
                        alt='Vercel Logo'
                        className='dark:invert'
                        width={24}
                        height={24}
                        priority
                    />
                </Link>
                <Link
                    className='flex flex-row space-x-2 text-muted-foreground'
                    href={'/about'}
                    target='_self'>
                    About this project
                </Link>
            </div>
        </div>
    );
};

export default Footer;
