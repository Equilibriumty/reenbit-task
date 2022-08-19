import React from 'react';
import { Message } from '../../types/types';
import styles from './ChatMessage.module.scss';

interface ChatMessageProps {
  message: Message;
  userAvatar: string;
}

const ChatMessage = ({ message, userAvatar }: ChatMessageProps) => {
  const parsedDate = new Date(message.time).toLocaleString();

  return (
    <div
      className={
        !message.receiver
          ? styles.chatMessageReceiver
          : styles.chatMessageSender
      }
    >
      <div className={styles.chatMessageMain}>
        {!message.receiver || <img src={userAvatar} alt='' />}
        <div className={styles.chatMessageText}>{message.text}</div>
      </div>
      <p className={styles.chatMessageTime}>{parsedDate}</p>
    </div>
  );
};

export default ChatMessage;
