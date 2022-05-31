import { createContext } from 'react';

export const AddContext = createContext({
  addUrl: false,
  setAddUrl: (data: boolean) => {},
  urlString: '',
  setUrlString: (data: string) => {},
  addDemo: false,
  setAddDemo: (data: boolean) => {},
  showFavirites: false,
  setShowFavirites: (data: boolean) => {},
  sortByDate: false,
  setSortByDate: (data: boolean) => {},
  columnView: false,
  setColumnView: (data: boolean) => {},
  deleteAll: false,
  setDeleteAll: (data: boolean) => {},
});
