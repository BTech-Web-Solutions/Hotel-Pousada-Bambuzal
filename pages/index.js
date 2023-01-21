import * as React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from '../src/components/Navbar';
import ImageList from '../src/components/ImageList';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Carrousel from '../src/components/Carrousel';


const theme = createTheme({});

export default function Index() {

  return (
    <>


      <ThemeProvider theme={theme}>
        <Navbar />
        <MainDiv>
          <Carrousel />

        </MainDiv>
      </ThemeProvider>
    </>
  );
}

const MainDiv = styled.div`
  height: 100vh;

`;