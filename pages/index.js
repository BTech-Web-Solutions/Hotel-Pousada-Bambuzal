import * as React from 'react';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from '../src/components/Navbar';
import ImageList from '../src/components/ImageList';
import styled from 'styled-components';


const theme = createTheme({});

export default function Index() {

  return (
    <ThemeProvider theme={theme}>
      <MainDiv>
        <Navbar />
        <h1>Home</h1>
        <ImageList />
      </MainDiv>
    </ThemeProvider>
  );
}

const MainDiv = styled.div`
  background-color: #fff8f6;
`;
