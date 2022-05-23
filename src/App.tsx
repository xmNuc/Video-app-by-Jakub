import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { AddContext } from './contexts/add.context';
import { Main } from './components/Main/Main';

export const App = () => {
  const [add, setAdd] = useState('');
  return (
    <>
      <AddContext.Provider value={{ add, setAdd }}>
        <Header />
        <Main />
      </AddContext.Provider>
    </>
  );
};
