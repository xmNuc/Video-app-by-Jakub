import React, { SyntheticEvent, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../contexts/search.context';
import { Btn } from '../common/Btn';
import './Header.css';
export const Header = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [inputVal, setInputVal] = useState(search);

  const setSearchFromLocalState = (e: SyntheticEvent) => {
    e.preventDefault();
    setSearch(inputVal);
  };

  return (
    <>
      <header>
        <Link className="header-link" to="/">
          <h2>
            <strong>Mega</strong> Ad
          </h2>
        </Link>

        <Btn to="/add" text="Add advertisement" />
        <form className="search" onSubmit={setSearchFromLocalState}>
          <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
          <Btn text="Search" />
        </form>
      </header>
    </>
  );
};
