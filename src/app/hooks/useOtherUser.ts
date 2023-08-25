import { useSession } from 'next-auth/react';
import { User } from '@prisma/client';
import { FullConversationType } from '../types';
import { useMemo } from 'react';

const useOtherUser = (conversation: FullConversationType | { users: User[] }) => {
    const session = useSession();
    const otherUser = useMemo(() => {
        const currentUserEmail = session?.data?.user?.email;

        const otherUser = conversation.users.filter((user) => user.email !== currentUserEmail);

        return otherUser[0];
    }, [conversation.users, session?.data?.user?.email]);

    return otherUser;
};
export default useOtherUser;
