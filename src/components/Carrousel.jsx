import { red } from '@mui/material/colors';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

const Carrousel = () => {

  return (
    <StyledCarrousel>
      <Carousel pause={false}>
        <Carousel.Item interval={5000}>
          <div
            style={{
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              position: 'absolute',
              zIndex: '1',
              width: '100%',
              height: '100%',
            }}
          />

          <img
            src="https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/Carrossel/1.png?raw=true"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <div
            style={{
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              position: 'absolute',
              zIndex: '1',
              width: '100%',
              height: '100%',
            }}
          />
          <img
            src="https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/Carrossel/2.png?raw=true"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <div
            style={{
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              position: 'absolute',
              zIndex: '1',
              width: '100%',
              height: '100%',
            }}
          />
          <img
            src="https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/Carrossel/3.png?raw=true"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <div
            style={{
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              position: 'absolute',
              zIndex: '1',
              width: '100%',
              height: '100%',
            }}
          />
          <img
            src="https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/Carrossel/4.png?raw=true"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </StyledCarrousel >
  );
};

export default Carrousel;

const StyledCarrousel = styled.div`


  
  h3, p, span, a {
    display: none;
  }
  

`;