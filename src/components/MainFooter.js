import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/MainFooter.css';

class MainFooter extends React.Component{

  render(){
    return(
      <div className="main-footer">
        <div className="container">
          <div className="main-footer-content">
            
            <div className="main-footer-column">
              <h6>About Us</h6>
              <div className="main-footer-item">
                <Link to="/" className="main-link small">About Schop</Link>
              </div>
              <div className="main-footer-item">
                <Link to="/" className="main-link">Blog</Link>
              </div>
              <div className="main-footer-item">
                <Link to="/" className="main-link small">Follow Us in Facebook</Link>
              </div>
              <div className="main-footer-item">
                <Link to="/" className="main-link">See Our Partners</Link>
              </div>
            </div>

            <div className="main-footer-column">
              <h6>Payment</h6>
              <div className="main-footer-item">
                <Link to="/" className="main-link small">Payment methods</Link>
              </div>
              <div className="main-footer-item">
                <Link to="/" className="main-link">Return Policy</Link>
              </div>
              <div className="main-footer-item">
                <Link to="/" className="main-link small">Property Claims</Link>
              </div>
              <div className="main-footer-item">
                <Link to="/" className="main-link">Report Froud</Link>
              </div>
            </div>

            <div className="main-footer-column">
              <h6>Delivery</h6>
              <div className="main-footer-item">
                <Link to="/" className="main-link small">Track The Order</Link>
              </div>
              <div className="main-footer-item">
                <Link to="/" className="main-link">Cancel Order</Link>
              </div>
            </div>

            <div className="main-footer-column">
              <h6>Contact Us</h6>
              <div className="main-footer-item">
                <Link to="/" className="main-link small">Contact page</Link>
              </div>
              <div className="main-footer-item">
                <Link to="/" className="main-link">Leave a Message</Link>
              </div>
            </div>

          </div>
          <div className="footer-copyright my-2">
            <div className="text-secondary text-center">
              Copyright &copy; 2019-{new Date().getFullYear()} SCHOP
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainFooter;