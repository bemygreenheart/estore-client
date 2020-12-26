import React from 'react';

import '../../styles/CircularCategory.css';

class CircularCategory extends React.Component{
  render(){
    return (
      <div className="circular-category">
        <div className="circular-category-img">
          <img className="img fluid rounded-circle" src={this.props.category.image}></img>
        </div>
        <div className="circular-category-title">
          <p className="text-secondary text-center">{this.props.category.title}</p>
        </div>
      </div>
    );
  }
}

export default CircularCategory;