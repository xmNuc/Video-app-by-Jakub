import React from 'react';
import { ShowPosts } from '../Posts/ShowPosts';
import { Footer } from './Footer';
import './Main.css';
export const Main = () => {
  return (
    <>
      <div className="main-wrap">
        <ShowPosts />
        <Footer />
      </div>
    </>
  );
};
