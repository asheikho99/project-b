import React from 'react';

import { getServerSession } from 'next-auth';

import Logout from './logout';
import Login from './login';
import UserMenu from './user-menu';

const AuthButton = async () => {
    const session = await getServerSession();
    {/* @ts-expect-error Server Component */}
    return session ? <UserMenu /> : <Login />;
};

export default AuthButton;
