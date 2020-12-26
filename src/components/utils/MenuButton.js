import React from 'react';

class MenuButton extends React.Component{

  onButtonClick(){
    const el = document.querySelector('.side-menu-wrap')
    el.style.right = 0;
  }

  render(){
    return(
      <div className="menu-button" onClick={this.onButtonClick}>
        <i className="ui icon large align justify"></i>
      </div>
    );
  }
}

export default MenuButton;