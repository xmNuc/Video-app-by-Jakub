import React, { SyntheticEvent, useContext, useState } from 'react';
import { AddContext } from '../../contexts/add.context';
import { Button, Form, FormGroup, Input, InputGroup } from 'reactstrap';
import { Buttons } from './Buttons';
import './Header.css';
import { UrlForm } from './UrlForm';

export const Header = () => {
  return (
    <>
      <header className="fixed-top d-flex align-items-center justify-content-between row flex-wrap">
        <h2 className="d-flex justify-content-center col-2">
          <strong>Video</strong> App <p>by Jakub</p>
        </h2>
        <div className="col-6 ">
          <Buttons />
        </div>
        <div className="pt-3 col">
          <UrlForm />
        </div>
      </header>
    </>
  );
};
