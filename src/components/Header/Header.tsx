import React from 'react';
import { Buttons } from './Buttons';
import { UrlForm } from './UrlForm';
import './Header.css';

export const Header = () => {
  return (
    <>
      <header className="fixed-top d-flex align-items-center justify-content-between row flex-wrap">
        <h2 className="d-flex justify-content-center col-2">
          <a href="./">
            <strong>Video</strong> App{' '}
          </a>{' '}
          <p>by Jakub</p>
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
