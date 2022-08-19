import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Message, User } from '../../types/types';

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
      lastMessage.time = date.toLocaleString();
    }
  }, [lastMessage, specificUserMessages]);

  return (
    <Link to={'/chats/' + specificUser.id}>
      <div className='chatElement'>
        <div className='chatElementInfo'>
          <img src={specificUser.avatar} alt='' />
        </div>
        <div className='chatElementDetails'>
          <p className='detailsName'>{specificUser.name}</p>
          <p className='detailsMessage'>{lastMessage.text}</p>
        </div>
        <p className='detailsTime'>{lastMessage.time}</p>
      </div>
    </Link>
  );
};

export default ChatElement;
