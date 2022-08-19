import axios from 'axios';
import React, { FC, useEffect } from 'react';
import { Data, DataAction, Message, User } from '../types/types';

export const DataContext = React.createContext<DataAction>({
  messages: [],
  users: [],
  updateMessages: () => {},
});

interface DataProviderProps {
  children: React.ReactNode;
}

export const DataProvider: FC<DataProviderProps> = ({ children }) => {
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
      {children}
    </DataContext.Provider>
  );
};
