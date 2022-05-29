import React, { SyntheticEvent, useContext, useState } from 'react';
import { Button } from 'reactstrap';
import { AddContext } from '../../contexts/add.context';

// interface Props {
//   handleDemoActive: (e: React.MouseEvent<HTMLElement>) => void;
// }

export const Buttons = () => {
  const {
    addDemo,
    setAddDemo,
    sortByDate,
    setSortByDate,
    setDeleteAll,
    showFavirites,
    setShowFavirites,
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
  const handleDeleteAll = (e: SyntheticEvent) => {
    e.preventDefault();
    setDeleteAll(true);
  };
  return (
    <>
      <Button className="mx-1" active color="success" outline onClick={handleDemoActive}>
        Demo videos
      </Button>
      <Button className="mx-1" active color="success" outline onClick={handleShowFavirites}>
        {showFavirites ? `Show All` : `Show Favorites`}
      </Button>
      <Button className="mx-1" active color="success" outline onClick={handleSort}>
        {newFirst ? `Sort by: oldest` : `Sort by: newest first`}
      </Button>
      <Button className="mx-5  " active color="danger" outline onClick={handleDeleteAll}>
        Delete All
      </Button>
    </>
  );
};
