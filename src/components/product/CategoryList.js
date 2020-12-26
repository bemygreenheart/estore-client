import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CircularCategory from './CircularCategory';
import '../../styles/CategoryList.css';

const CategoryList = (props)=>{
  const settings = {
    dots: true,
    infinite: false,
    speed : 400,
    slidesToShow : 4,
    arrows: false,
    
  }

    return(
      <div className="circle-category-list">
        <div className="container">
          <div>
            <h4 className="text-center my-3">Featured Categories</h4>
          </div>
          <div className="category-list-content">
            <Slider {...settings}>
              <CircularCategory category={{title: "Smartphones", image : "https://source.unsplash.com/100x100/?person"}} />
              <CircularCategory category={{title: "Smartphones", image : "https://source.unsplash.com/100x100/?woman"}} />
              <CircularCategory category={{title: "Smartphones", image : "https://source.unsplash.com/100x100/?man"}} />
              <CircularCategory category={{title: "Smartphones", image : "https://source.unsplash.com/100x100/?animal"}} />
              <CircularCategory category={{title: "Smartphones", image : "https://source.unsplash.com/100x100/?nature"}} />
              <CircularCategory category={{title: "Smartphones", image : "https://source.unsplash.com/100x100/?dress"}} />
              <CircularCategory category={{title: "Smartphones", image : "https://source.unsplash.com/100x100/?food"}} />
            </Slider>
          </div>
        </div>
      </div>
    );
  }

export default CategoryList;