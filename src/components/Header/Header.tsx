import React, { SyntheticEvent, useContext, useState } from 'react';
import { AddContext } from '../../contexts/add.context';
import { Button, Form, FormGroup, Input, InputGroup } from 'reactstrap';
import './Header.css';

export const Header = () => {
  const { add, setAdd, addDemo, setAddDemo, sortByDate, setSortByDate, deleteAll, setDeleteAll } =
    useContext(AddContext);
  const [inputVal, setInputVal] = useState(add);
  const [newFirst, setNewFirst] = useState(sortByDate);

  const setUrlLocalState = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(`setUrlLocalState`);
    setAdd(inputVal);
  };

  const handleDemoActive = (e: SyntheticEvent) => {
    e.preventDefault();
    setAddDemo(!addDemo);
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
      <header className="fixed-top d-flex align-items-center justify-content-between">
        <h2 className="d-flex justify-content-center">
          <strong>Video</strong> App
        </h2>

        <Button active color="success" outline onClick={handleDemoActive}>
          Demo videos
        </Button>
        <Button active color="success" outline onClick={handleSort}>
          {newFirst ? `Sort by: oldest` : `Sort by: newest first`}
        </Button>
        <Button active color="danger" outline onClick={handleDeleteAll}>
          Delete All
        </Button>
        <Form className="pt-3" onSubmit={setUrlLocalState}>
          <FormGroup>
            <InputGroup>
              <Input
                id="url"
                name="url"
                placeholder="Add video url or video id"
                type="text"
                alue={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
              />
              <Button>Add</Button>
            </InputGroup>
          </FormGroup>
        </Form>
      </header>
    </>
  );
};
