import React, { useRef } from 'react';
import './Header.styles.css';
import { useSearch } from '../../context/SearchContext';

function Header() {
  const { search, setSearch } = useSearch();
  const inputRef = useRef();

  const saveSearch = () => {
    setSearch(inputRef.current.value);
  };

  // const [ searchText, setSearchText ] = useState('');

  // const handleInput = (e) =>{
  //   const text = e.target.value
  //   setSearch(text)
  // }

  return (
    <div className="header">
      <button>Menu</button>
      <div className="header-input">
        <svg width="20" height="20"></svg>
        <input
          ref={inputRef}
          onChange={saveSearch}
          placeholder="Search..."
          type="text"
          value={search}
        />
      </div>
      <div className="right-container">
        <label className="switch">
          <input type="checkbox"></input>
          <span className="slider round"></span>
        </label>
        <span className="span-text">Dark mode</span>
        <button>login</button>
      </div>
    </div>
  );
}

export default Header;
