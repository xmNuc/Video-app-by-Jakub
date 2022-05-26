import { createContext } from 'react';

export const AddContext = createContext({
  add: '',
  setAdd: (s: string) => {},
  addDemo: false,
  setAddDemo: (data: boolean) => {},
});
