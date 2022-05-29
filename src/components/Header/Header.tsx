import React, { SyntheticEvent, useContext, useState } from 'react';
import { AddContext } from '../../contexts/add.context';
import { Button, Form, FormGroup, Input, InputGroup } from 'reactstrap';
import { Buttons } from './Buttons';
import './Header.css';
import { UrlForm } from './UrlForm';

export const Header = () => {
  // const { addUrl, setAddUrl } = useContext(AddContext);
  // const [inputVal, setInputVal] = useState(addUrl);

  // const setUrlLocalState = (e: SyntheticEvent) => {
  //   e.preventDefault();
  //   console.log(inputVal);
  //   setAddUrl(inputVal);
  // };

  return (
    <>
      <header className="fixed-top d-flex align-items-center justify-content-between row">
        <h2 className="d-flex justify-content-center col-2">
          <strong>Video</strong> App <p>by Jakub</p>
        </h2>
        <div className="col-6">
          <Buttons />
        </div>
        <div className="pt-3 col">
          <UrlForm />
          {/* <Form onSubmit={setUrlLocalState}>
            <FormGroup>
              <InputGroup>
                <Input
                  id="url"
                  name="url"
                  placeholder="Add video url or video id"
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                />
                <Button>Add</Button>
              </InputGroup>
            </FormGroup>
          </Form> */}
        </div>
      </header>
    </>
  );
};
