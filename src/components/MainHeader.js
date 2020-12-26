import React from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import '../styles/MainHeader.css';
import HoverIcon from './utils/HoverIcon';
import LanguageItem from './utils/LangaugeItem';
import SideMenu from './SideMenu';

class MainHeader extends React.Component{
  state = {selectorActive : false};

  renderIcon(iconLabel){
    return <i className={`ui icon ${iconLabel}`}></i>
  }

  onLanguageTogglerClick = ()=>{
    const el = document.querySelector('.language-menu');
    if(!this.state.selectorActive){
      el.style.display = 'block';
      this.setState({selectorActive : true})
    }
    else{
      el.style.display = 'none';
      this.setState({selectorActive : false});
    }
  }

  render(){
    const language = this.props.selectedLanguage.current;
    const arrow_type = this.state.selectorActive ? "up" : 'down'; 
    return(
      <div className="main-header-wrap">
        <div className="container">
        <div className="header-top main-color">
          <div className="row">
            <div className="col-7">
              <div className="d-flex flex-row py-2">
                <div className="language-dropdown mx-2" id="language">
                  <div className="language-toggler">
                    <div style={{cursor : 'pointer'}} onClick={this.onLanguageTogglerClick}>
                      <img style={{width: "15px", marginRight : "5px"}} src={process.env.PUBLIC_URL + `images/languages/${language}.svg`}/>
                      {language.charAt(0).toUpperCase() + language.slice(1)}
                      <i className={`ui icon angle ${arrow_type}`}></i>
                    </div>
                  </div>
                  <div className="language-menu">
                    <LanguageItem language={"english"}/>
                    <LanguageItem language={"russian"}/>
                    <LanguageItem language={"uzbek"}/>
                  </div>
                </div>
                <div className="px-2 main-color"><Link to="/" className="main-link">Help</Link></div>
                <div className="px-2 main-color optional"><Link to="/" className="main-link">About</Link></div>
                <div className="px-2 main-color optional"><Link to="/" className="main-link">Contact</Link></div>
              </div>
            </div>
            <div className="col-5">
              <div className="d-flex flex-row-reverse">
                <HoverIcon icon={this.renderIcon('large cart plus')}/>
                <HoverIcon icon={this.renderIcon('large outline user')}/>
                <HoverIcon icon={this.renderIcon('large outline heart')}/>
              </div>
            </div>
          </div>
        </div>
        <Navbar/>
        </div>
        <SideMenu/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps)=>{
  return {selectedLanguage : state.selectedLanguage}
}
export default connect(mapStateToProps, {})(MainHeader);