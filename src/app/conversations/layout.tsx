import { Children, FunctionComponent } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import ConversationList from './components/ConversationList';
import getConversations from '../actions/getConversations';
import getUser from '../actions/getUsers';

interface ConversationsLayoutProps {
    children: React.ReactNode;
}

const ConversationsLayout: FunctionComponent<ConversationsLayoutProps> = async ({ children }) => {
    const conversations = await getConversations();
    const users = await getUser();
    return (
        <Sidebar>
            <div className="h-full">
                <ConversationList users={users} initialItems={conversations} />
                {children}
            </div>
        </Sidebar>
    );
};

export default ConversationsLayout;
