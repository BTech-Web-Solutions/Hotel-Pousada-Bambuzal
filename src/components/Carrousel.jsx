import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

const Carrousel = () => {

  return (
    <StyledCarrousel>
      <Carousel>
        <Carousel.Item>
          <img
            src="https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/Carrossel/1.png?raw=true"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/Carrossel/2.png?raw=true"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/Carrossel/3.png?raw=true"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/Carrossel/4.png?raw=true"
            alt="First slide"
          />
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
    width: 100%;
    
  }

`;