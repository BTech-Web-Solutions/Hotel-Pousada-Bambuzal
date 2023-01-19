import * as React from 'react';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from '../src/components/Navbar';

const theme = createTheme({});

export default function Index() {

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <h1>Home</h1>
    </ThemeProvider>
  );
}
