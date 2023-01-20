import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from '../src/components/Navbar';
import ImageList from '../src/components/ImageList';
import styled from 'styled-components';
import Box from '@mui/material/Box';


const theme = createTheme({});

export default function Index() {

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <MainDiv>
        <Box
          maxWidth="lg"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { md: 'space-around' },

          }}
        >
          <ImageList />
          <div className='texts'>
            <h1>Lugar de Paz</h1>

            <h3>
              Um paraíso em meio às  montanhas da região serrana de Macaé para você
              desfrutar da natureza com requinte e qualidade.
            </h3>
          </div>

        </Box>
      </MainDiv>
    </ThemeProvider>
  );
}

const MainDiv = styled.div`
  padding: 0 1rem;
  margin: 0 auto;
  max-width: 1500px;

  .texts {
    padding: 0 1rem;
  }
`;