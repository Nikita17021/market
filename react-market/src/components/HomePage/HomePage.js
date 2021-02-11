import React from 'react';
import Header from '../Header/header.js';

import Carousel from 'react-bootstrap/Carousel';
import Footer from '../footer/footer.js';
import TeaCategory from '../teaCategory/teaCategory.js';


function HomePage() {
    return (
        <div>
    <Header></Header>
      <Carousel>
      <Carousel.Item>
    <img
      className="d-block w-100"
      src="./Banner.png"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./Banner.png"
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./Banner.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  <TeaCategory></TeaCategory>
  <Footer></Footer>
  </div>
    )}

export default HomePage;