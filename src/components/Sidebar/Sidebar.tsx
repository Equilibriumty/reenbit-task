import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../context/DataContext';
import { User } from '../../types/types';
import ChatList from '../ChatList/ChatList';
import Search from '../UI/Search/Search';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const { users } = useContext(DataContext);

  const [searchedUsers, setSearchedUsers] = React.useState<User[]>(users);

  useEffect(() => {
    setSearchedUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, users]);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <img src='' alt='' />
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <ChatList searchedUsers={searchedUsers} />
    </aside>
  );
};

export default Sidebar;
