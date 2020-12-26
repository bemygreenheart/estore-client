import React from 'react';

import FeatureCard from './FeatureCard';
import '../../styles/Features.css';

class Features extends React.Component{
  render(){
    return(
      <div className="features optional">
        <div className="container">
          <div className="features-content">
            <FeatureCard feature = {{icon : "gem", title : "Quality Goods", text : "Enjoy top quality items for less"}}/>
            <FeatureCard feature = {{icon : "headphones", title : "Help Line", text : "Easy connection with specialists"}}/>
            <FeatureCard feature = {{icon : "truck", title : "Express Shipping", text : "Fast & reliable delivery options"}}/>
            <FeatureCard feature = {{icon : "credit card", title : "Secure Payment",text : "Multiple safe payment methods"}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;