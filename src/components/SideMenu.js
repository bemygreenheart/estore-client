import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import '../styles/SideMenu.css';
import SideMenuUserPanel from './utils/SideMenuUserPanel';

class SideMenu extends React.Component{

  departments = [
    "Electronics",
    "Smartphones",
    "computers",
    "Smart Home",
    "Accesaries",
    "Toys",
  ]

  renderDepartment(department){
    return (
      <div className="department-name" key={department}>
        <Link to="/">{department}</Link>
        <i className="ui icon angle right"></i>
      </div>
    );
  }

  onWrapClick(){
    const el = document.querySelector('.side-menu-wrap');
    el.style.right = "-100%";
  }

  render(){
    return (
      <div className="side-menu-wrap" onClick={this.onWrapClick}>
        <div className="d-flex flex-row-reverse">
        <div className="side-menu" onClick={event => event.stopPropagation()}>
          <div className="side-menu-header">
          <SideMenuUserPanel/>
          </div>
          <div className="side-menu-content">
            <div className="shop-departments">
              <h5 className="text-center my-3">Departments</h5>
              {this.departments.map((department)=>this.renderDepartment(department))}
            </div>
            <div className="help-settings">
              <h5 className="text-center my-3">Help & Settings</h5>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default SideMenu;