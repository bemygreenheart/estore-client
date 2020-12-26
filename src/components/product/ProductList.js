import React from 'react';

import ProductCard from './ProductCard';
import '../../styles/ProductList.css';

class ProductList extends React.Component{
  render(){
    return(
      <div className="product-list">
        <div className="container">
          <h3 className="text-center my-4">Check Out Our Selection</h3>
          <div className="product-list-content">
            <ProductCard product={{image: "https://source.unsplash.com/300x400/?child",title : "Baseball trainers", price: 23, sale: 0.2 }}/>
            <ProductCard product={{image: "https://source.unsplash.com/300x400/?flower",title : "New light trainers", price: 47.5 }}/>
            <ProductCard product={{image: "https://source.unsplash.com/300x400/?light",title : "Baseball trainers", price: 25.2, sale: 0.2 }}/>
            <ProductCard product={{image: "https://source.unsplash.com/300x400/?bulding",title : "Long hoodie", price: 47.5 }}/>
            <ProductCard product={{image: "https://source.unsplash.com/300x400/?man",title : "Baseball trainers", price: 54.5, sale: 0.2 }}/>
            <ProductCard product={{image: "https://source.unsplash.com/300x400/?bicycle",title : "New Year sweeter", price: 47.5 }}/>
            <ProductCard product={{image: "https://source.unsplash.com/300x400/?animal",title : "Diamond jewellery", price: 130, sale: 0.2 }}/>
            <ProductCard product={{image: "https://source.unsplash.com/300x400/?food",title : "Baseball trainers", price: 11.5 }}/>
            <ProductCard product={{image: "https://source.unsplash.com/300x400/?child",title : "Baseball trainers", price: 23, sale: 0.2 }}/>
            <ProductCard product={{image: "https://source.unsplash.com/300x400/?mother",title : "New light trainers", price: 47.5 }}/>
            <ProductCard product={{image: "https://source.unsplash.com/300x400/?light",title : "Baseball trainers", price: 25.2, sale: 0.2 }}/>
            <ProductCard product={{image: "https://source.unsplash.com/300x400/?person",title : "Long hoodie", price: 47.5 }}/>
            <ProductCard product={{image: "https://source.unsplash.com/300x400/?man",title : "Baseball trainers", price: 54.5, sale: 0.2 }}/>
            <ProductCard product={{image: "https://source.unsplash.com/300x400/?light",title : "New Year sweeter", price: 47.5 }}/>
            <ProductCard product={{image: "https://source.unsplash.com/300x400/?animal",title : "Diamond jewellery", price: 130, sale: 0.2 }}/>
            <ProductCard product={{image: "https://source.unsplash.com/300x400/?person",title : "Baseball trainers", price: 11.5 }}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;