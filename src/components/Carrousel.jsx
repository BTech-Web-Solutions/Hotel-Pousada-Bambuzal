import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import Image from "next/image";

import image1 from "../../src/images/Carrossel/1.png";
import image2 from "../../src/images/Carrossel/2.png";
import image3 from "../../src/images/Carrossel/3.png";
import image4 from "../../src/images/Carrossel/4.png";

const Carrousel = () => {
  return (
    <StyledCarrousel>
      <Carousel
        pause={false}
        indicators={false}
        controls={false}
        fade={true}
        interval={5000}
        className="carrousel"
      >
        <Carousel.Item>
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

          <Image src={image1} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
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
          <Image src={image2} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
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
          <Image src={image3} alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
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
          <Image src={image4} alt="First slide" />
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

  @media (max-width: 480px) {
    img {
      width: 180vw;
      height: 80vh;
      margin-left: -8rem;
    }
    .carousel {
      overflow-y: hidden;
      width: 100vw;
    }
  }

  /* Dispositivos móveis em paisagem */
  @media (min-width: 481px) and (max-width: 767px) {
    img {
      width: 170vw;
      height: 80vh;
    }
    .carousel {
      overflow-y: hidden;
      width: 100vw;
    }
  }

  /* Tablets em retrato */
  @media (min-width: 768px) and (max-width: 991px) {
    img {
      width: 120vw;
      height: 84vh;
    }
    .carousel {
      overflow-y: hidden;
      width: 100vw;
    }
  }

  /* Tablets em paisagem e telas menores de desktop */
  @media (min-width: 992px) and (max-width: 1199px) {
    img {
      width: 120vw;
      height: 80vh;
    }
    .carousel {
      overflow-y: hidden;
      width: 100vw;
    }
  }

  /* Telas maiores de desktop */
  @media (min-width: 1200px) and (max-width: 1399px) {
    /* Inserir regras de estilo aqui */
    img {
      width: 120vw;
      height: 80vh;
    }
    .carousel {
      overflow-y: hidden;
      width: 100vw;
    }
  }

  /* Monitores maiores de alta resolução */
  @media (min-width: 1400px) and (max-width: 1599px) {
    /* Inserir regras de estilo aqui */
  }

  /* Monitores ainda maiores de alta resolução */
  @media (min-width: 1600px) and (max-width: 1919px) {
    /* Inserir regras de estilo aqui */
  }

  /* Monitores ainda maiores de alta resolução */
  @media (min-width: 1920px) and (max-width: 2559px) {
    /* Inserir regras de estilo aqui */
  }
`;
