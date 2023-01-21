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
          <h1>Texto de teste</h1>
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

  h1 {
    position: absolute;
    z-index: 5;
    color: white;
  }
`;