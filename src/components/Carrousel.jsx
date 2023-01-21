import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

const Carrousel = () => {

  return (
    <StyledCarrousel>
      <Carousel>
        <Carousel.Item>
          <img
            src="https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ImageList/1.jpg?raw=true"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ImageList/2.jpg?raw=true"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ImageList/3.jpg?raw=true"
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
    </StyledCarrousel>
  );
};

export default Carrousel;

const StyledCarrousel = styled.div`
  h3, p, span, button, a {
    display: none;
  }

  img {
    width: 80%;
  }

`;