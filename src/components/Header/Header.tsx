import React, { SyntheticEvent, useContext, useState } from 'react';
import { AddContext } from '../../contexts/add.context';
import { Button, Form, FormGroup, Input, InputGroup } from 'reactstrap';
import { Buttons } from './Buttons';
import './Header.css';

export const Header = () => {
  const { add, setAdd } = useContext(AddContext);
  const [inputVal, setInputVal] = useState(add);

  const setUrlLocalState = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(inputVal);
    setAdd(inputVal);
  };

  return (
    <>
      <header className="fixed-top d-flex align-items-center justify-content-between row">
        <h2 className="d-flex justify-content-center col-2">
          <strong>Video</strong> App <p>by Jakub</p>
        </h2>
        <div className="col-6">
          <Buttons />
        </div>
        <Form className="pt-3 col" onSubmit={setUrlLocalState}>
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
