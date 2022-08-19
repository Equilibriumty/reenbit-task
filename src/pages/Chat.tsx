import { Route, Routes } from 'react-router-dom';
import ChatContainer from '../components/ChatContainer/ChatContainer';
import Sidebar from '../components/Sidebar/Sidebar';

const Chat = () => {
  return (
    <div>
      <Sidebar />
      <ChatContainer />
    </div>
  );
};

export default Chat;
