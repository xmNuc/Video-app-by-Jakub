import React, { SyntheticEvent, useContext, useState } from 'react';
import { AddContext } from '../../contexts/add.context';
import { Button, Form, FormGroup, Input, InputGroup } from 'reactstrap';
import './Header.css';

export const Header = () => {
  const { add, setAdd, addDemo, setAddDemo, sortByDate, setSortByDate } = useContext(AddContext);
  const [inputVal, setInputVal] = useState(add);
  const [newFirst, setNewFirst] = useState(true);

  const setUrlLocalState = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(`setUrlLocalState`);
    setAdd(inputVal);
  };

  const setDemoActive = (e: SyntheticEvent) => {
    e.preventDefault();
    setAddDemo(!addDemo);
  };

  const toggleSort = (e: SyntheticEvent) => {
    e.preventDefault();
    setSortByDate(!sortByDate);
    setNewFirst(!newFirst);
  };

  return (
    <>
      <header className="fixed-top d-flex align-items-center justify-content-between">
        <h2 className="d-flex justify-content-center">
          <strong>Video</strong> App
        </h2>

        <Button active color="success" outline onClick={setDemoActive}>
          Demo videos
        </Button>
        <Button active color="success" outline onClick={toggleSort}>
          {newFirst ? `Sort by: newest first` : `Sort by: oldest`}
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
