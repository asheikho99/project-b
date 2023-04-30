import React from 'react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import UserAvatar from './user-avatar';
import Logout from './logout';
import { getServerSession } from 'next-auth';

const UserMenu = async () => {

    const session = await getServerSession()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                {/* @ts-expect-error Server Component */}
                <UserAvatar />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Logout />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserMenu;
