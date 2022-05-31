import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { AddContext } from './contexts/add.context';
import { Main } from './components/Main/Main';

export const App = () => {
  const [addUrl, setAddUrl] = useState(false);
  const [urlString, setUrlString] = useState('');
  const [addDemo, setAddDemo] = useState(false);
  const [showFavirites, setShowFavirites] = useState(false);
  const [sortByDate, setSortByDate] = useState(false);
  const [columnView, setColumnView] = useState(false);
  const [deleteAll, setDeleteAll] = useState(false);
  return (
    <>
      <AddContext.Provider
        value={{
          addUrl,
          setAddUrl,
          urlString,
          setUrlString,
          addDemo,
          showFavirites,
          setShowFavirites,
          setAddDemo,
          sortByDate,
          setSortByDate,
          deleteAll,
          setDeleteAll,
          columnView,
          setColumnView,
        }}
      >
        <Header />
        <Main />
      </AddContext.Provider>
    </>
  );
};
