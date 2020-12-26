import React from 'react';
import faker from 'faker';

import CategoryList from '../product/CategoryList';
import ProductList from '../product/ProductList';
import Features from '../utils/Features';
import MainFooter from '../MainFooter';
import MainHeader from '../MainHeader';
import Showcase from '../Showcase';

class HomePage extends React.Component{


  render(){
    return(
      <div>
        <MainHeader/>
        <Showcase/>
        <CategoryList/>
        <ProductList/>
        <Features/>
        <MainFooter/>
      </div>
    );
  }
}

export default HomePage;