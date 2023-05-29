import { createContext } from 'react';

interface CounterType {
  count: number;
  incrementCount: () => void;
  decrementCount: () => void;
}
export default createContext<CounterType | undefined>(undefined);
