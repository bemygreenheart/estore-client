import React from 'react';

import '../styles/Showcase.css';

class Showcase extends React.Component{

  background = {
    "backgroundImage" :  "url(" + process.env.PUBLIC_URL + "images/showcase-bs.jpg)",
    "backgroundRepeat" : "no-repeat",
    "backgroundSize" : "100% auto",
    "backgroundPosition" : "bottom"

  }

  render(){
    return (
      <div className="showcase" style={this.background}>
        <div className="light-overlay">
        <div className="container">
          <div className="showcase-content">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6 d-none d-md-block">
                <img src={process.env.PUBLIC_URL + `/images/sale-1.jpg`} className="img-fluid" alt="Discount"/>
              </div>
              <div className="col-md-6 text-center">
                <div className="showcase-info">
                <h5 className="text-center">Save by checking for discounts</h5>
                <a className="btn btn-outline-light">Check Out Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Showcase;