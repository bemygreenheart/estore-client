import React from 'react';

import SearchBar from './SearchBar';
import HoverIcon from './utils/MenuButton';
import {Link} from 'react-router-dom';
import MenuButton from './utils/MenuButton';

class Navbar extends React.Component{
  render(){
    return (
      <nav className="main-navbar my-2">
        <div className="row">
          <div className="col-4">
          <Link to="/" className="navbar-brand">
            <img src={process.env.PUBLIC_URL + 'images/brand.png'}></img>
          </Link>
          </div>
          <div className="col-8">
            <div className="d-flex flex-row-reverse">
            <MenuButton/>
            <SearchBar/>
            </div>
          </div >
        </div>
      </nav>
    );
  }
}

export default Navbar;