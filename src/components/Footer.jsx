import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Image from "next/image";
import logo from "../images/logo.png";
import facebookIcon from "../images/Icons/Facebook.png";
import instagramIcon from "../images/Icons/Instagram.png";
import ActiveLink from "./ActiveLink";
import TheButton from "./Button";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <StyledFooter>
      {/* space1 */}
      <Box
        sx={{
          // border: '1px solid red',
          height: {
            xs: "20%",
            sm: "20%",
            md: "20%",
            lg: "20%",
            xl: "20%",
          },
          width: {
            xs: "70%",
            sm: "35%",
            md: "20%",
            lg: "20%",
            xl: "20%",
          },
          padding: "2rem",
        }}
      >
        <Image
          src={logo}
          alt="Logo"
          style={{
            height: "20%",
            width: "100%",
            marginBottom: "1rem",
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <ActiveLink href="/">INÍCIO</ActiveLink>

          <ActiveLink href="/sobre">A POUSADA</ActiveLink>

          <ActiveLink href="/acomodacoes">ACOMODAÇÕES</ActiveLink>

          <ActiveLink href="/galeria">GALERIA</ActiveLink>

          <ActiveLink href="/contato">CONTATO</ActiveLink>
        </Box>
      </Box>

      {/* space2 */}
      <Box
        sx={{
          // border: '1px solid red',
          height: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "100%",
          },
          padding: "2rem",
        }}
      >
        <h1 className="title">Localização</h1>

        <Typography
          variant="p"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          ESTRADA DO SANA
          <br />
          Nº 2000 <br />
          SANA, MACAÉ - RJ
        </Typography>

        <Link
          style={{ textDecoration: "none" }}
          href="https://goo.gl/maps/vFgyaLqkfeZghtUR7"
        >
          <TheButton title="Ver no Mapa" />
        </Link>
      </Box>

      {/* space3 */}
      <Box
        sx={{
          // border: '1px solid red',
          height: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "100%",
          },

          padding: "2rem",
          textAlign: "center",
        }}
      >
        <h1 className="title ">Contatos</h1>

        <p>
          {`(22) 9 8811-2500`} <br />
          {`(22) 2793-2400`} <br />
          {`hotelpousadabambuzal@gmail.com`} <br />
        </p>
      </Box>

      {/* space4 */}
      <Box
        sx={{
          // border: '1px solid red',
          height: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "100%",
          },
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <h1 className="title titleStart">Redes Sociais</h1>

        <a
          className="social"
          href="https://www.facebook.com/HotelPousadaBambuzal"
          target={"_blank"}
        >
          <Image
            style={{ marginRight: "0.5rem" }}
            src={facebookIcon}
            alt="Facebook"
            width={30}
            height={30}
          />

          <p>Facebook</p>
        </a>

        <a
          className="social"
          href="https://www.instagram.com/hpbambuzal/"
          target={"_blank"}
        >
          <Image
            style={{ marginRight: "0.5rem" }}
            src={instagramIcon}
            alt="Instagram"
            width={30}
            height={30}
          />
          <p>Instagram</p>
        </a>
      </Box>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background-color: #181818;
  color: white;
  display: flex;
  justify-content: space-around;

  .title {
    color: #eb5322;
    font-weight: 800;
    font-size: 2rem;
  }

  .titleStart {
    text-align: start;
  }

  a.active {
    border-bottom: none;
  }

  a:hover {
    border-bottom: none;
  }

  .social {
    display: flex;
    text-decoration: none;
    color: #eb5322;
  }

  .social:hover {
    color: #d3873b;
  }

  @media screen and (max-width: 1920px) {
    /*styles here*/
  }

  @media screen and (max-width: 1440px) {
    /*styles here*/
  }

  @media screen and (max-width: 1200px) {
    /*styles here*/
  }

  @media screen and (max-width: 1024px) {
    /*styles here*/
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 992px) {
    /*styles here*/
  }

  @media screen and (max-width: 768px) {
    /*styles here*/
  }

  @media screen and (max-width: 576px) {
    /*styles here*/
  }

  @media screen and (max-width: 480px) {
    /*styles here*/
  }

  @media screen and (max-width: 320px) {
    /*styles here*/
  }
`;
