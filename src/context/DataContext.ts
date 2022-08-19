import React from 'react';
import { Data } from '../types/types';

export const DataContext = React.createContext<Data | null>(null);
