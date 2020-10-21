import React ,{ useState } from 'react';
import {render} from 'react-dom';
import Carousel from 'react-bootstrap/Carousel'
import './slider.css';

  function Slider() {
    return (
      <Carousel activeIndex={3} onSelect={2}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/react-market/public/Banner.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/react-market/public/Banner.png"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/react-market/public/Banner.png"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  };
  render(<Slider />);
export default Slider;