import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { AddContext } from './contexts/add.context';
import { Main } from './components/Main/Main';

export const App = () => {
  const [add, setAdd] = useState('');
  const [addDemo, setAddDemo] = useState(false);
  const [sortByDate, setSortByDate] = useState(false);
  return (
    <>
      <AddContext.Provider value={{ add, setAdd, addDemo, setAddDemo, sortByDate, setSortByDate }}>
        <Header />
        <Main />
      </AddContext.Provider>
    </>
  );
};
