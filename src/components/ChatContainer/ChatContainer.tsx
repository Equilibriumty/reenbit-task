import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';
import { Message, User } from '../../types/types';
import ChatMessage from '../ChatMessage/ChatMessage';
import styles from './ChatContainer.module.css';

const ChatContainer = () => {
  const [currentUser, setCurrentUser] = React.useState<User>({} as User);
  const [currentMessages, setCurrentMessages] = React.useState<Message[]>([]);

  const { users, messages } = React.useContext(DataContext);
  const { id } = useParams();

  useEffect(() => {
    setCurrentUser(users.find((user) => user.id === +id!) || ({} as User));
    const sortedMessages = messages
      .filter((message) => message.chatId === +id!)
      .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
    setCurrentMessages(sortedMessages);
  }, [id, messages, users]);

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatContainerHeader}>
        <img src={currentUser.avatar} alt='' />
        <h1 className={styles.chatContainerUsername}>{currentUser.name}</h1>
      </div>
      <div className={styles.chatContainerMessages}>
        {currentMessages.map((message) => (
          <ChatMessage
            message={message}
            userAvatar={currentUser.avatar}
            key={currentUser.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatContainer;
