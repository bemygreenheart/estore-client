import React from 'react';

class SearchBar extends React.Component{
  render(){
    return (
      <form className="d-flex main-searchbar">
      <div className="input-group mb-3">
        <input type="text" className="form-control" />
        <button className="btn btn-danger input-group-text">
          <i className="ui icon search"></i>
        </button>
      </div>
      </form>
    );
  }
}

export default SearchBar;