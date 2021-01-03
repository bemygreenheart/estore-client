import React from 'react';

import MainHeader from '../MainHeader';
import MainFooter from '../MainFooter';
import '../../styles/AboutPage.css';
class AboutPage extends React.Component{

  renderPaymentImg(name){
    return(
      <div className="about-payment-img">
      <img src={process.env.PUBLIC_URL + `/images/${name}`}/>
    </div>
    );
  }

  renderAbout(){
    return (
      <div>
      <div className="about-showcase" style={this.showcaseStyle}>
        <img src={process.env.PUBLIC_URL + '/images/showcase-about.jpg'}/>
        <div className="about-showcase-info">
          <h4 className="my-red display-1">Schop</h4>
          <p><i className="ui icon large fire my-red"></i>One Step Ahead</p>
        </div>
      </div>
      <div className="about-info">
        <div className="container text-center my-4">
          <h2>About Schop</h2>
          <p className="text-secondary">Schop is a B2C online fashion shopping destination. Found in 2019, 
            in the past years we achieved rapid development thanks to our loyal customers
            ranking among the top online shopping websites. We offer a wide range of clothing,
            shoes, bags, accesories to help you-our customers pursuit your styles. Currently we
            gained trust in Central Asia and want expand more in the coming years with the help of 
            our genuine and unique style products and you guys!
          </p>
        </div>
      </div>
      <div className="about-philosophy">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h6 className="my-red"> BRAND SLOGAN</h6>
              <p>Make our our brand name part of your daily vocublary so that 
                we always stay close to you.
              </p>
            </div>
            <div className="col-sm-6">
              <img src={process.env.PUBLIC_URL + '/images/about-1.jpg'}/>
            </div>
          </div>

          <div className="row">
          <div className="col-sm-6">
              <img src={process.env.PUBLIC_URL + '/images/about-2.jpg'}/>
            </div>
            <div className="col-sm-6">
              <h6 className="my-red">BRAND MISSION</h6>
              <p>Provide high quality, low cost fashion products 
                with unique design style to our customers.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <h6 className="my-red">BRAND VISION</h6>
              <p>It is our highest priority here at schop.uz to create the 
                best shopping experience and offer its cutomers the highest 
                quality products.
              </p>
            </div>
            <div className="col-sm-6">
              <img src={process.env.PUBLIC_URL + '/images/about-3.jpg'}/>
            </div>
          </div>
        </div>
      </div>
      <div className="about-brands my-5">
        <div className="container">
        <h3 className="text-center">Featured Brands</h3>
        <img src={process.env.PUBLIC_URL + '/images/partners.png'} />
        </div>
      </div>

      <div className="container">
        <h3 className="text-center my-3">Payment Methods</h3>
      <div className="about-payment">
        {this.renderPaymentImg('click.png')}
        {this.renderPaymentImg('payme.png')}
        {this.renderPaymentImg('visa.png')}
        {this.renderPaymentImg('master.png')}
      </div>
      <div className="my-4">
        <div className="flex-center-div">
        <a className="my-btn">Learn More</a>
        </div>
      </div>
      </div>
    </div>
    );
  }

  render(){
    return(
      <div>
        <MainHeader/>
        {this.renderAbout()}
        <MainFooter/>
      </div>
    );
  }

}

export default AboutPage;