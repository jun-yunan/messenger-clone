import { FunctionComponent } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import getUser from '../actions/getUsers';
import UserList from './components/UserList';

interface UserLayoutProps {
    children: React.ReactNode;
}

const UserLayout: FunctionComponent<UserLayoutProps> = async ({ children }) => {
    const users = await getUser();
    return (
        <Sidebar>
            <div className="h-full">
                <UserList items={users} />
                {children}
            </div>
        </Sidebar>
    );
};

export default UserLayout;
