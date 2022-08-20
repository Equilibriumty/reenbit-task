import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';
import { Message, User } from '../../types/types';
import ChatMessage from '../ChatMessage/ChatMessage';
import Avatar from '../UI/Avatar/Avatar';
import Input from '../UI/Input/Input';
import styles from './ChatContainer.module.css';

const ChatContainer = () => {
  const [currentUser, setCurrentUser] = React.useState<User>({} as User);
  const [currentMessages, setCurrentMessages] = React.useState<Message[]>([]);

  const { users, messages } = React.useContext(DataContext);
  const { id } = useParams();

  useEffect(() => {
    setCurrentUser(users.find((user) => user.id === +id!) || ({} as User));
    const sortedMessages = [...messages]
      .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime())
      .filter((message) => message.chatId === +id!);

    setCurrentMessages(sortedMessages);
  }, [id, messages, users]);

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatContainerHeader}>
        <Avatar src={currentUser.avatar} />
        <h1 className={styles.chatContainerUsername}>{currentUser.name}</h1>
      </div>
      <div className={styles.chatContainerMessages}>
        {currentMessages.map((message, idx) => (
          <ChatMessage
            key={idx}
            message={message}
            userAvatar={currentUser.avatar}
          />
        ))}
      </div>
      <div className={styles.chatContainerInput}>
        <Input />
      </div>
    </div>
  );
};

export default ChatContainer;
