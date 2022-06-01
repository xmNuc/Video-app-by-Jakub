import React from 'react';
import { Buttons } from './Buttons';
import { UrlForm } from './UrlForm';
import './Header.css';

export const Header = () => {
  return (
    <>
      <header className="row fixed-top d-flex align-items-center justify-content-between  flex-wrap">
        <h2 className="logo d-flex justify-content-center col-xl-2 col-sm-6">
          <a href="/">
            <strong>Video</strong> App{' '}
          </a>{' '}
          <p>by Jakub</p>
        </h2>
        <div className="btns d-flex justify-content-center align-items-center flex-wrap col-6 col-sm-6">
          <Buttons />
        </div>
        <div className="input pt-3 col-xl-4 col-sm-12">
          <UrlForm />
        </div>
      </header>
    </>
  );
};
