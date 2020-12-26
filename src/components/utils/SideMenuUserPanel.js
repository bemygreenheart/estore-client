import React from 'react';

import '../../styles/SideMenuUserPanel.css';
class SideMenuUserPanel extends React.Component{

  render(){
    return(
      <div className="side-menu-user-panel d-flex flex-row">
        <div className="side-menu-user-img">
          <i className="ui icon big user circle outline"></i>
        </div>
        <div className="my-1">
          Hello, Login
        </div>
      </div>
    );
  }
}

export default SideMenuUserPanel;