import React, { SyntheticEvent, useContext, useEffect, useState } from 'react';
import { Button, Form, FormGroup, Input, InputGroup } from 'reactstrap';
import { AddContext } from '../../contexts/add.context';
import getVideoId from 'get-video-id';

export const UrlForm = () => {
  const { setAddUrl, urlString, setUrlString } = useContext(AddContext);
  const [inputVal, setInputVal] = useState<string>(urlString);
  const videoFromUrl = getVideoId(inputVal);
  const newVideoId: any = videoFromUrl.id;

  const handleAddNewUrl = (e: SyntheticEvent) => {
    e.preventDefault();
    if (typeof inputVal === 'string' && inputVal.length === 11) {
      setUrlString(inputVal);
      setAddUrl(true);
    } else {
      setUrlString(newVideoId);
      setAddUrl(true);
      setInputVal('');
    }
  };

  return (
    <>
      <Form onSubmit={handleAddNewUrl}>
        <FormGroup>
          <InputGroup>
            <Input
              id="url"
              name="url"
              placeholder="Add Youtube video url or video id"
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <Button>Add</Button>
          </InputGroup>
        </FormGroup>
      </Form>
    </>
  );
};
