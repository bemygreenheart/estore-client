import React from 'react';
import '../../styles/HoverIcon.css';

class HoverIcon extends React.Component{

  render(){
    return (
      <div className="p-2 d-inline-block rounded-2 hover-icon">
        {this.props.icon}
      </div>
    );
  }
}

export default HoverIcon;