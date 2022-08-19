import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ChatContainer from './components/ChatContainer/ChatContainer';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './pages/Chat';

function App() {
  return (
    <div className='App'>
      <Chat />
    </div>
  );
}

export default App;
