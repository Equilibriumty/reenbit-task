import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './pages/Chat';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/chats' element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
