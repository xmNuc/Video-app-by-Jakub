import React, { useEffect, useState } from 'react';
import { Buttons } from './Buttons';
import { UrlForm } from './UrlForm';
import useWindowSize from '../../hooks/useWindowSize';
import { Button } from 'reactstrap';
import menu from '../../img/menu.png';
import './Header.css';
interface Size {
  width: number;
  height: number;
}

export const Header = () => {
  const [mobileView, setMobileView] = useState(false);

  const size: Size = useWindowSize();
  const actSize = Number(size.width);

  useEffect(() => {
    actSize >= 800 ? setMobileView(false) : setMobileView(true);
  }, [actSize]);

  const handleMobile = () => {
    setMobileView(!mobileView);
  };

  return (
    <>
      <header className="row fixed-top d-flex align-items-center justify-content-between  flex-wrap">
        <h2 className="logo d-flex justify-content-center col-xl-2 col-sm-12">
          <a href="/">
            <strong>Video</strong> App{' '}
          </a>{' '}
          <p>by Jakub</p>
        </h2>{' '}
        {actSize <= 800 && (
          <Button className="m-1" active color="light" outline onClick={handleMobile}>
            {<img src={menu} alt="blocks icon" />}
          </Button>
        )}
        {!mobileView && (
          <>
            <div className="btns d-flex justify-content-center align-items-center flex-wrap col-xl-6 col-sm-12">
              <Buttons />
            </div>
            <div className="input pt-3 col-xl-4 col-sm-12">
              <UrlForm />
            </div>
          </>
        )}
        {/* <div className="btns d-flex justify-content-center align-items-center flex-wrap col-xl-6 col-sm-12">
          <Buttons />
        </div>
        <div className="input pt-3 col-xl-4 col-sm-12">
          <UrlForm />
        </div> */}
      </header>
    </>
  );
};
