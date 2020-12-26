import React from 'react';

import '../../styles/ProductCard.css';

class ProductCard extends React.Component{

  // Should add the currency sign after figuring out how to store the price
  renderPrice(){
    if(!this.props.product.sale){
    return (
      <div className="product-card-price">
        <p className="text-dark">
          {this.props.product.price}
        </p>
      </div>
    );
    }
    else{
      const new_price = Number((this.props.product.price * (1-this.props.product.sale)).toFixed(2));
      return (
        <div className="product-card-price">
          <p className="text-danger">{new_price}</p>
          <p className="text-secondary"><del>{this.props.product.price}</del></p>
        </div>
      );
    }
  }

  render(){
    return(
      <div className="product-card">
        <div className="product-card-image">
          <img src={this.props.product.image}/>
        </div>
        <div className="product-card-info">
          <div className="product-card-title">
            <p className="text-secondary">{this.props.product.title}</p>
          </div>
          {this.renderPrice()}
        </div>
      </div>
    );
  }
}

export default ProductCard;