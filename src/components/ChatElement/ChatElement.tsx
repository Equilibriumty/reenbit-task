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
  const [lastMessage, setLastMessage] = React.useState<Message>({} as Message);

  useEffect(() => {
    const sortedMessages = specificUserMessages.sort(
      (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
    );

    if (sortedMessages.length) {
      setLastMessage(sortedMessages[0]);
      const date = new Date(sortedMessages[0].time);
      lastMessage.time = date.toDateString();
    }
  }, [lastMessage, specificUserMessages]);
  console.log(lastMessage);
  const parsedDate = new Date(lastMessage.time).toLocaleDateString();

  return (
    <Link to={'/chats/' + specificUser.id} className={styles.chatLink}>
      <div className={styles.chatElement}>
        <div className={styles.chatElementInfo}>
          <Avatar src={specificUser.avatar} />
        </div>
        <div className={styles.chatElementDetails}>
          <p className={styles.detailsName}>{specificUser.name}</p>
          <p className={styles.detailsMessage}>{lastMessage.text}</p>
        </div>
        <p className={styles.detailsTime}>{parsedDate}</p>
      </div>
    </Link>
  );
};

export default ChatElement;
