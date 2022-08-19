import React, { ChangeEvent, KeyboardEvent } from 'react';
import { useParams } from 'react-router-dom';
import { getRandomJoke } from '../../../api/getRandomJoke';
import { DataContext } from '../../../context/DataContext';
import { Message } from '../../../types/types';
import styles from './Input.module.scss';

const Input = () => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const { updateMessages } = React.useContext(DataContext);
  const { id } = useParams();

  const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      updateMessages(sendMessage(inputValue));
      getRandomJoke().then((joke) => {
        setTimeout(() => {
          updateMessages(sendMessage(joke, true));
        }, 1000);
      });
      setInputValue('');
    }
  };

  const sendMessage = (text: string, receiver: boolean = false): Message => {
    return {
      id: new Date().getTime(),
      chatId: +id!,
      receiver,
      text,
      time: new Date().toLocaleString(),
    };
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Type message...'
        className={styles.input}
        value={inputValue}
        onChange={handleChange}
        onKeyUp={handleEnterPress}
      />
    </div>
  );
};

export default Input;
