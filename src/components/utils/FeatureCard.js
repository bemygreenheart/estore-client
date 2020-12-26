import React from 'react';

import '../../styles/FeatureCard.css';

class FeatureCard extends React.Component{

  render(){
    return (
      <div className="feature-card">
        <div className="feature-card-icon">
          <i className={`ui icon big ${this.props.feature.icon}`}></i>
        </div>
        <div className="feature-card-body">
          <h6>{this.props.feature.title}</h6>
          <p className="text-secondary">{this.props.feature.text}</p>
        </div>
      </div>
    );
  }
}

export default FeatureCard;