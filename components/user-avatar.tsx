import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getServerSession } from 'next-auth';
import { Skeleton } from "@/components/ui/skeleton";

const UserAvatar = async () => {

    const session = await getServerSession()

    return (
        <Avatar>
            <AvatarImage src={session?.user?.image?.toString()} />
            <AvatarFallback><Skeleton className="h-10 w-10 rounded-full" /></AvatarFallback>
        </Avatar>
    );
};

export default UserAvatar;
