import React, { SyntheticEvent, useContext, useState } from 'react';
import { Button } from 'reactstrap';
import { AddContext } from '../../contexts/add.context';
import list from '../../img/list.png';
import blocks from '../../img/blocks.png';
import sortup from '../../img/sort-up.png';
import sortdown from '../../img/sort-down.png';

export const Buttons = () => {
  const {
    addDemo,
    setAddDemo,
    sortByDate,
    setSortByDate,
    setDeleteAll,
    showFavirites,
    setShowFavirites,
    columnView,
    setColumnView,
  } = useContext(AddContext);
  const [newFirst, setNewFirst] = useState(sortByDate);

  const handleDemoActive = (e: SyntheticEvent) => {
    e.preventDefault();
    setAddDemo(!addDemo);
  };

  const handleShowFavirites = (e: SyntheticEvent) => {
    e.preventDefault();
    setShowFavirites(!showFavirites);
  };

  const handleSort = (e: SyntheticEvent) => {
    e.preventDefault();
    setSortByDate(!sortByDate);
    setNewFirst(!newFirst);
  };

  const handleView = (e: SyntheticEvent) => {
    e.preventDefault();
    setColumnView(!columnView);
  };

  const handleDeleteAll = (e: SyntheticEvent) => {
    e.preventDefault();
    setDeleteAll(true);
  };
  return (
    <>
      <Button className="m-1" active color="success" outline onClick={handleDemoActive}>
        Demo videos
      </Button>
      <Button className="m-1" active color="success" outline onClick={handleShowFavirites}>
        {showFavirites ? `Show All` : `Show Favorites`}
      </Button>
      <Button className="m-1" active color="light" outline onClick={handleSort}>
        {newFirst ? <img src={sortup} alt="sort up" /> : <img src={sortdown} alt="sort down" />}
      </Button>
      <Button className="btn-view m-1" active color="light" outline onClick={handleView}>
        {columnView ? <img src={blocks} alt="blocks icon" /> : <img src={list} alt="list icon" />}
      </Button>
      <Button className=" m-1 " active color="danger" outline onClick={handleDeleteAll}>
        Delete All
      </Button>
    </>
  );
};
