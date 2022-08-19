import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { User } from '../../types/types';
import ChatElement from '../ChatElement/ChatElement';
import styles from './ChatList.module.css';

interface ChatListProps {
  searchedUsers: User[];
}

const ChatList = ({ searchedUsers }: ChatListProps) => {
  const { messages } = useContext(DataContext);

  return (
    <div className={styles.chatList}>
      <h1 className={styles.chatListTitle}>Chats</h1>
      {searchedUsers.map((user, id) => {
        const specificUserMessages = messages.filter(
          (message) => message.chatId === user.id
        );
        return (
          <ChatElement
            key={id}
            specificUser={user}
            specificUserMessages={specificUserMessages}
          />
        );
      })}
    </div>
  );
};

export default ChatList;
