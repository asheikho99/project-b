'use client';

import React, { useState } from 'react';
import { signOut } from 'next-auth/react';

const Logout = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <button
            onClick={() => {
                signOut();
                setIsLoading(true);
            }}
            disabled={isLoading}>
            <span>Log out</span>
        </button>
    );
};

export default Logout;
