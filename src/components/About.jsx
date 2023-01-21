import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';

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

const cards = [1, 2, 3];

const theme = createTheme();

export default function About() {
  return (
    <Container sx={{bgcolor:'#161616', position:'relative', height:'100vh'}}>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          <Card sx={{ width: 980, display:'flex', mt:2, borderRadius: '18px' }}>
            <CardMedia
            component="img"
            alt="placa entrada da pousada"
            height="460"
            image="https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ImageList/1.jpg?raw=true"
            />
          </Card>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <h1 style={{color:'white', marginTop:'-18px'}}>A Pousada</h1>
            <h4 style={{color:'white', marginTop:'18px', width:'70%'}}>São mais de <b>16.000 m²</b> da mais pura beleza natural de toda região.</h4>
          </div>
        </div>

        <div style={{display:'flex', justifyContent:'space-around', marginTop:'-65px' }}>
          <Card sx={{ width: 980, display:'flex', mt:2, borderRadius:'18px' }}>
            <CardMedia
            sx={{objectFit:'cover'}}
            component="img"
            alt="placa entrada da pousada"
            height="460"
            image="https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ImageList/7.jpg?raw=true"
            />
          </Card>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <h3 style={{color:'white', marginTop:'18px', width:'70%'}}>Perfeito para quem busca tranquilidade e contato com a natureza.</h3>
            <Button variant='contained' sx={{bgcolor:'#F0551ECC', mt:26}}>Saiba Mais</Button>
          </div>
        </div>
    </Container>
  )
}

// https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ImageList/7.jpg?raw=true