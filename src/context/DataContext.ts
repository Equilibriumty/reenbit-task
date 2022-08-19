import React from 'react';
import { Data, DataAction } from '../types/types';

export const DataContext = React.createContext<DataAction | undefined>(
  undefined
);
