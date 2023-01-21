import React from 'react';
import Navbar from '../../src/components/Navbar';
import About from '../../src/components/About';
import Footer from '../../src/components/Footer';
import { Container } from '@mui/material';

const index = () => {
  return (
    <Container>
      <Navbar />
      <About />
      <Footer />
    </Container>
  );
};

export default index;