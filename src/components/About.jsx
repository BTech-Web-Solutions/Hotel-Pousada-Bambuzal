import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Grid } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function About() {
  return (
    <Container sx={{bgcolor:'#161616', height:'100vh', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Card>
            <Box 
              component='img' 
              src='https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ImageList/1.jpg?raw=true' 
              sx={{background: '#161616'}}
            />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{background: '#161616', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'6em', mt:4}}>
              <Typography variant='h2' color='white'>A Pousada</Typography>
              <Typography variant='h5' color='white'>São mais de <b>16.000 m²</b> da mais pura beleza natural da região.</Typography>
            </Box>
          </Grid>
          <Grid item xs={4} alignContent='center'>
            <Box sx={{background: '#161616', display:'flex', flexDirection:'column', minHeight:'400px', justifyContent:'center'}}>
              <Typography variant='h5' color='white' textAlign='center'>Perfeito para quem busca tranquilidade e contato com a natureza.</Typography>
            </Box>
          </Grid>
          <Grid item xs={8} sx={{marginTop:'-46px'}}>
            <Card>
            <Box 
              component='img' 
              src='https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ImageList/7.jpg?raw=true' 
              sx={{background: '#161616'}}
            />
            </Card>
          </Grid>
        </Grid>
        <Box mt={8}>
          <Button variant='contained' sx={{bgcolor:'#F0551E'}}>Saiba Mais</Button>
        </Box>
    </Container>
  )
}

// https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ImageList/1.jpg?raw=true
// https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ImageList/7.jpg?raw=true