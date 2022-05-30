import React from 'react';
import './Footer.css';
export const Footer = () => {
  return (
    <>
      <div className="footer">
        <h6 className=" d-flex justify-content-center">
          &copy;{' '}
          <a target="_blank" href="https://github.com/xmNuc" rel="noreferrer">
            Jakub (NuC) 2022
          </a>
        </h6>{' '}
      </div>
    </>
  );
};
