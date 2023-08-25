import { FunctionComponent } from 'react';

import EmptyState from '../components/EmptyState';

interface UsersProps {}

const Users: FunctionComponent<UsersProps> = () => {
    return (
        <div className="hidden lg:block lg:pl-80 h-full">
            <EmptyState />
        </div>
    );
};

export default Users;
