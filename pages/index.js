import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from '../src/components/Navbar';
import Typography from '@mui/material/Typography';
import Carrousel from '../src/components/Carrousel';
import styled from 'styled-components';
import { Box } from '@mui/material';


const theme = createTheme({});

export default function Index() {

  return (
    <>

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
                  lg: '5rem',
                  md: '4rem',
                  sm: '3rem',
                  xs: '2rem'
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
                fontWeight: '10',
                fontSize: {
                  lg: '3rem',
                  md: '2rem',
                  sm: '1rem',
                  xs: '1rem'
                },
                marginTop: '3rem'

              }}

            >

              Um paraíso em meio às montanhas da região
              serrana de Macaé para você desfrutar da natureza
              com requinte e qualidade.

            </Typography>
          </Box>



          <Carrousel />

        </MainDiv>

      </ThemeProvider>

    </>
  );
}

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;