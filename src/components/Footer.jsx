import React from 'react'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Menu, MenuItem, Typography, Toolbar, Container } from '@mui/material';
import logo from '../images/logo.png';
import Image from 'next/image';
import ActiveLink from './ActiveLink';

export default function Footer() {
  return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      > 
        <Toolbar disableGutters>
          <Box
            sx={{ height: 54, display:'flex', flexDirection:'column' }}
          >
            <Image
              src={logo}
              alt="Logo"
              style={{ height: '100%', width: '100%' }}
            />
            <Typography>ALOU</Typography>
          </Box>
        </Toolbar>
        <Divider orientation="vertical" flexItem />
      </Box>
  )
}
