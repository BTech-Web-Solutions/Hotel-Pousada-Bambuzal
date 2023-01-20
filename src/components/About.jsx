import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
    <section>
      <div>
        <div>
          <img src="https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ImageList/1.jpg?raw=true" alt="" />
          <h1>A Pousada</h1>
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio voluptatibus vel molestiae autem ex</h3>
        </div>
        <div>
          <img src="" alt="" />
          <h1>A Pousada</h1>
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio voluptatibus vel molestiae autem ex</h3>
          <button>Saiba mais</button>
        </div>
      </div>
    </section>
  )
}