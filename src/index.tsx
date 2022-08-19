import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Sidebar from './components/Sidebar/Sidebar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path='/chats' element={<Sidebar />} />
          <Route path='/chats/:id' element={<App />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
