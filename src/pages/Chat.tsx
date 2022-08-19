import axios from 'axios';
import React, { useEffect } from 'react';
import { DataContext } from '../context/DataContext';
import { Data, Message, User } from '../types/types';

const Chat = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [messages, setMessages] = React.useState<Message[]>([]);

  useEffect(() => {
    axios
      .get<Data>(String(process.env.REACT_APP_API_URL))
      .then((res) => res.data)
      .then((data) => {
        setUsers(data.users);
        setMessages(data.messages);
      });
  }, []);

  const updateMessages = (message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <DataContext.Provider value={{ users, messages, updateMessages }}>
      <div>{users[1]?.name}</div>
      <h1>Test</h1>
    </DataContext.Provider>
  );
};

export default Chat;
