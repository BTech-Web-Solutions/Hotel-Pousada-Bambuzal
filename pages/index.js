import * as React from 'react';
import Link from 'next/link'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from '../src/components/Navbar';
import Typography from '@mui/material/Typography';
import Carrousel from '../src/components/Carrousel';
import styled from 'styled-components';
import { Box } from '@mui/material';
import TheButton from '../src/components/Button';
import About from '../src/components/About';
import Footer from '../src/components/Footer';


const theme = createTheme({});

export default function Index() {

  return (
    <div
      style={{
        maxWidth: '1600px',
      }}
    >

      <ThemeProvider theme={theme}>

        <Navbar />

        <MainDiv>
          <Box
            maxWidth='60%'

            sx={{
              position: 'absolute',
              zIndex: '5',
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: 'white',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: {
                  xs: '2rem',
                  sm: '3rem',
                  md: '4rem',
                  lg: '5rem',
                },

              }}

            >

              Lugar de Paz

            </Typography>

            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: 'white',
                fontWeight: '400',
                fontSize: {
                  xs: '0.8rem',
                  sm: '2rem',
                  md: '2rem',
                  lg: '3rem',
                },
                marginTop: {
                  xs: '1rem',
                  sm: '1rem',
                  md: '2rem',
                  lg: '3rem',
                }

              }}

            >

              Um paraíso em meio às montanhas da região
              serrana de Macaé para você desfrutar da natureza
              com requinte e qualidade.

            </Typography>

            <Box
              sx={{
                marginTop: {
                  xs: '1rem',
                  sm: '1rem',
                  md: '2rem',
                  lg: '3rem',
                },
                display: 'flex',
                justifyContent: 'center',

              }}
            >
              
              <Link
                style={{ textDecoration: "none" }}
                href="https://book.securebookings.net/roomrate?id=c4dd3ad1-0057-1672770166-46f7-a98b-44ec5a1f6793&lang=br">
                <TheButton title="Reserve Agora" />
              </Link>
            </Box>


          </Box>


          <Carrousel />


        </MainDiv>
        
        <About />

        <Footer />

      </ThemeProvider>

    </div>
  );
}

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;