import React from 'react';
import {connect} from 'react-redux';

import {selectLanguage} from '../../actions';

class LanguageItem extends React.Component{
  render(){
    return (
      <div className="language-item" style={{cursor : 'pointer'}} onClick={()=> this.props.selectLanguage(this.props.language)}>
      <img style={{width: "15px", marginRight : "5px"}} src={process.env.PUBLIC_URL + `images/languages/${this.props.language}.svg`}/>
      {this.props.language.charAt(0).toUpperCase() + this.props.language.slice(1)}
    </div>
    );
  }
}

export default connect(null, {selectLanguage})(LanguageItem);