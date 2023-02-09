import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '../components/Button';
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
    <Box
      sx={{
        bgcolor: '#161616',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '1.5rem 0',
        padding:'3rem',
      }}
    >

      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: { 
            xs: 'column',
            sm: 'column',
            md:'row',
            lg:'row',
            xl:'row',
          },
          marginLeft: {
            xs: '0rem',
            sm: '0rem',
            md: '5rem',
            lg: '2rem',
            xl: '10rem',
          },
        }}
       spacing={2}
      >
        <Grid
          item
          xs={7}
        >

          <Box
            component='img'
            src='https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ImageList/1.jpg?raw=true'
            sx={{
              width: {
                xs: '180%',
                sm: '170%',
                md: '90%',
                lg: '90%',
                xl: '90%',
              },
              borderRadius: '20px',

            }}
            
          />

        </Grid>
        <Grid
          item
          xs={11}
          sm={11}
          md={5}
          lg={5}
          xl={5}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            
          }}
          
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              
            }}
          >
            <Typography
              variant='h2'
              color='white'
              textAlign='center'  
              sx={{
                fontSize: {
                  xs: '1rem',
                  sm: '1rem',
                  md: '2rem',
                  lg: '3rem',
                },
                
              }}            
            >
              A Pousada
            </Typography>

            <Typography
              color='white'
              sx={{
                fontSize: {
                  xs: '0.5rem',
                  sm: '0.5rem',
                  md: '1rem',
                  lg: '2rem',
                },
              }}
            >
              São mais de <b>16.000 m²</b> da mais pura beleza natural da região.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: { 
            xs: 'column',
            sm: 'column',
            md:'row',
            lg:'row',
            xl:'row',
          },
          // bgcolor: 'red',
          marginRight: {
            xs: '0rem',
            sm: '0rem',
            md: '1.5rem',
            lg: '2.5rem',
            xl: '2rem',
          },
          marginTop: '-2.5rem'
          
        }}
       spacing={2}
      >
        <Grid
          item
          xs={7}
          
        >

          <Box
            component='img'
            src='https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ImageList/7.jpg?raw=true'
            sx={{
              width: {
                xs: '180%',
                sm: '170%',
                md: '90%',
                lg: '90%',
                xl: '90%',
              },
              borderRadius: '20px',

            }}
            
          />

        </Grid>
        <Grid
          item
          xs={11}
          sm={11}
          md={5}
          lg={5}
          xl={5}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              
            }}
          >
            <Typography
              color='white'
              sx={{
                fontSize: {
                  xs: '0.5rem',
                  sm: '0.5rem',
                  md: '1rem',
                  lg: '2rem',
                },
              }}
            >
              Perfeito para quem busca tranquilidade e contato com a natureza.
            </Typography>

            <Box>
              <Button
                title='Saiba Mais'
              />
            </Box>
          </Box>
        </Grid>
      </Grid>       
    </Box>
  );
}

// https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ImageList/1.jpg?raw=true
// https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ImageList/7.jpg?raw=true


{/* <Grid
          item
          xs={4}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '400px',
              justifyContent: 'center'
            }}
          >
            <Typography
              color='white'
              fontSize={40}
            >
              Perfeito para quem busca tranquilidade e contato com a natureza.
            </Typography>

          </Box>
        </Grid>

        <Gridd
          item
          sx={{
            marginTop: '-80px'
          }}
        >
          <Box
            component='img'
            src='https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ImageList/7.jpg?raw=true'
          />
        </Gridd> */}