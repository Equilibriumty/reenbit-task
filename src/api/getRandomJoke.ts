import axios from 'axios';
import { Joke } from '../types/types';

export const getRandomJoke = async (): Promise<string> => {
  const response = await axios.get<Joke>(
    String(process.env.REACT_APP_API_JOKES_URL)
  );

  return response.data.value;
};
