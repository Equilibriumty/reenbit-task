import React from 'react';
import styles from './Search.module.scss';
interface SearchProps {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}

const Search = ({ searchQuery, setSearchQuery }: SearchProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.searchWrapper}>
      <input
        className={styles.search}
        value={searchQuery}
        onChange={handleChange}
        type='text'
        placeholder='Search...'
      />
    </div>
  );
};

export default Search;
