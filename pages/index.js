import * as React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from '../src/components/Navbar';
import ImageList from '../src/components/ImageList';
import Box from '@mui/material/Box';
import Carrousel from '../src/components/Carrousel';
import styled from 'styled-components';


const theme = createTheme({});

export default function Index() {

  return (
    <>


      <ThemeProvider theme={theme}>
        <Navbar />
        <MainDiv>

          <Carrousel />
          <h1>Texto de teste</h1>

        </MainDiv>
      </ThemeProvider>
    </>
  );
}

const MainDiv = styled.div`

`;