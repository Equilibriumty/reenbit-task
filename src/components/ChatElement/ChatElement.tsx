import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Message, User } from '../../types/types';
import Avatar from '../UI/Avatar/Avatar';
import styles from './ChatElement.module.scss';

interface ChatElementProps {
  specificUser: User;
  specificUserMessages: Message[];
}

const ChatElement = ({
  specificUser,
  specificUserMessages,
}: ChatElementProps) => {
  const [latestMessage, setLatestMessage] = React.useState<Message>(
    {} as Message
  );
  const [latestMessageTime, setLatestMessageTime] = React.useState<string>('');
  useEffect(() => {
    const sortedMessages = [...specificUserMessages].sort(
      (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
    );
    if (sortedMessages.length) {
      setLatestMessage(sortedMessages[0]);
      const date = new Date(sortedMessages[0].time).toDateString();
      setLatestMessageTime(date);
    }
  }, [latestMessage, specificUserMessages]);

  return (
    <Link to={'/chats/' + specificUser.id} className={styles.chatLink}>
      <div className={styles.chatElement}>
        <div className={styles.chatElementInfo}>
          <Avatar src={specificUser.avatar} />
        </div>
        <div className={styles.chatElementDetails}>
          <p className={styles.detailsName}>{specificUser.name}</p>
          <p className={styles.detailsMessage}>{latestMessage.text}</p>
        </div>

        <p className={styles.detailsTime}>{latestMessageTime}</p>
      </div>
    </Link>
  );
};

export default ChatElement;
