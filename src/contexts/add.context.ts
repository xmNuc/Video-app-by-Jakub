import { createContext } from 'react';

export const AddContext = createContext({
  add: '',
  setAdd: (data: string) => {},
  addDemo: false,
  setAddDemo: (data: boolean) => {},
  showFavirites: false,
  setShowFavirites: (data: boolean) => {},
  sortByDate: false,
  setSortByDate: (data: boolean) => {},
  deleteAll: false,
  setDeleteAll: (data: boolean) => {},
});
