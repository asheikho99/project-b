import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getServerSession } from 'next-auth';

const UserAvatar = async () => {

    const session = await getServerSession()

    return (
        <Avatar>
            <AvatarImage src={session?.user?.image?.toString()} />
            <AvatarFallback>{session?.user?.name?.charAt(0)}</AvatarFallback>
        </Avatar>
    );
};

export default UserAvatar;
