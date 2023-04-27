import React from 'react';

import { getServerSession } from 'next-auth';

import Logout from './logout';
import Login from './login';

const AuthButton = async () => {
    const session = await getServerSession();
    return session ? <Logout /> : <Login />;
};

export default AuthButton;
