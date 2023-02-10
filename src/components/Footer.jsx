import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Image from 'next/image';
import logo from '../images/logo.png';
import facebookIcon from '../images/Icons/Facebook.png';
import instagramIcon from '../images/Icons/Instagram.png';
import ActiveLink from './ActiveLink';
import Button from './Button';

const Footer = () => {
  return (
    <StyledFooter>

      {/* space1 */}
      <Box
        sx={{
          // border: '1px solid red',
          height: {
            xs: '100%',
            sm: '100%',
            md: '100%',
            lg: '100%',
            xl: '100%',
          },
          width: '20%',
          padding: '2rem',
        }}
      >
        <Image
          src={logo}
          alt="Logo"
          style={{
            height: '20%',
            width: '100%'
          }}
        />

        <ActiveLink href="/">
          INÍCIO
        </ActiveLink>

        <ActiveLink href="/sobre">
          A POUSADA
        </ActiveLink>

        <ActiveLink href="/acomodacoes">
          ACOMODAÇÕES
        </ActiveLink>

        <ActiveLink href="/galeria">
          GALERIA
        </ActiveLink>

        <ActiveLink href="/contato">
          CONTATO
        </ActiveLink>



      </Box>

      {/* space2 */}
      <Box
        sx={{
          // border: '1px solid red',
          height: {
            xs: '100%',
            sm: '100%',
            md: '100%',
            lg: '100%',
            xl: '100%',
          },
          width: '20%',
          padding: '2rem',
        }}
      >
        <h1 className='title'>Localização</h1>

        <p>
          ESTRADA DO SANA<br />
          Nº 2000 <br />
          SANA, MACAÉ - RJ
        </p>

        <Button
          title='Ver no Mapa'
        />



      </Box>

      {/* space3 */}
      <Box
        sx={{
          // border: '1px solid red',
          height: {
            xs: '100%',
            sm: '100%',
            md: '100%',
            lg: '100%',
            xl: '100%',
          },
          width: '20%',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <h1 className='title'>Contatos</h1>

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
            xs: '100%',
            sm: '100%',
            md: '100%',
            lg: '100%',
            xl: '100%',
          },
          width: '20%',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <h1 className='title'>Redes Sociais</h1>

        <a
          className='social'
          href='https://www.facebook.com/HotelPousadaBambuzal'
          target={'_blank'}
        
        >
          <Image
            style={{ marginRight: '0.5rem' }}
            src={facebookIcon}
            alt='Facebook'
            width={30}
            height={30}
          />

          <p>Facebook</p>
        </a>

        <a
          className='social'
        >
          <Image
            style={{ marginRight: '0.5rem' }}
            src={instagramIcon}
            alt='Instagram'
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


  @media screen and (min-width: 1920px){
     /*styles here*/ 
  }

  @media screen and (min-width: 1440px){ 
    /*styles here*/
  }

  @media screen and (min-width: 1200px){ 
    /*styles here*/ 
  }

  @media screen and (min-width: 1024px){ 
    /*styles here*/ 
  }


  @media screen and (min-width: 992px){
     /*styles here*/
  }

  @media screen and (min-width: 768px){
     /*styles here*/
  }

  @media screen and (min-width: 576px){ 
    /*styles here*/ 
  }

  @media screen and (min-width: 480px){
     /*styles here*/ 
  }
  
  @media screen and (min-width: 320px){
     /*styles here*/ 

  }
 
`;