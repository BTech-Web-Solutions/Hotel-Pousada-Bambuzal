import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import {
  CarouselSlideOne,
  CarouselSlideTwo,
  CarouselSlideThree,
  CarouselSlideFour,
} from "../utils/funcs/CarouselRenderWindowSize";

const Carrousel = () => {
  return (
    <StyledCarrousel>
      <Carousel pause={false}>
        <Carousel.Item interval={1000}>
          <div
            style={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              position: "absolute",
              zIndex: "1",
              width: "100%",
              height: "100%",
            }}
          />

          <img src={CarouselSlideOne()} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <div
            style={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              position: "absolute",
              zIndex: "1",
              width: "100%",
              height: "100%",
            }}
          />
          <img src={CarouselSlideTwo()} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <div
            style={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              position: "absolute",
              zIndex: "1",
              width: "100%",
              height: "100%",
            }}
          />
          <img src={CarouselSlideThree()} alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <div
            style={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              position: "absolute",
              zIndex: "1",
              width: "100%",
              height: "100%",
            }}
          />
          <img src={CarouselSlideFour()} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </StyledCarrousel>
  );
};

export default Carrousel;

const StyledCarrousel = styled.div`
  h3,
  p,
  span,
  a {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
    margin: auto;
  }

  .carousel-indicators {
    display: none;
  }
`;
