import React, { SyntheticEvent, useContext, useState } from 'react';
import { Button, Form, FormGroup, Input, InputGroup } from 'reactstrap';
import { AddContext } from '../../contexts/add.context';
export const UrlForm = () => {
  const { addUrl, setAddUrl } = useContext(AddContext);
  const [inputVal, setInputVal] = useState(addUrl);

  const setUrlLocalState = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(inputVal);
    setAddUrl(inputVal);
  };
  return (
    <>
      <Form onSubmit={setUrlLocalState}>
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
      </Form>{' '}
    </>
  );
};
