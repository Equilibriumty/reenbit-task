import { Route, Routes } from 'react-router-dom';
import ChatContainer from '../components/ChatContainer/ChatContainer';
import Sidebar from '../components/Sidebar/Sidebar';

const Chat = () => {
  return (
    <>
      <Sidebar />
      <ChatContainer />
    </>
  );
};

export default Chat;
