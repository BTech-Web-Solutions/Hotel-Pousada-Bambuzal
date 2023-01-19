import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import logo from '../images/logo.png';
import Image from 'next/image';
import ActiveLink from './ActiveLink';

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{
        background: '#272e38',
        marginBottom: 5,

      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{ height: 54 }}
          >
            <Image
              src={logo}
              alt="Logo"
              style={{ height: '100%', width: '100%' }}
            />
          </Box>


          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: { xs: 'flex-end' },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                ul: { background: '#272e38', color: '#fff', textDecoration: 'none' }
              }}
            >
              <MenuItem>
                <ActiveLink href="/">
                  INÍCIO
                </ActiveLink>
              </MenuItem>

              <MenuItem>
                <ActiveLink href="/sobre">
                  A POUSADA
                </ActiveLink>
              </MenuItem>

              <MenuItem>
                <ActiveLink href="/acomodacoes">
                  ACOMODAÇÕES
                </ActiveLink>
              </MenuItem>

              <MenuItem>
                <ActiveLink href="/galeria">
                  GALERIA
                </ActiveLink>
              </MenuItem>

              <MenuItem>
                <ActiveLink href="/contato">
                  CONTATO
                </ActiveLink>
              </MenuItem>

            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: { xs: 'flex-end' },
            }}
          >

            <ActiveLink href="/">
              INÍCIO
            </ActiveLink>

            <ActiveLink href="/sobre">
              A POUSADA
            </ActiveLink>

            <ActiveLink href="/acomodacoes">
              ACOMODAÇÕES
            </ActiveLink>

            <ActiveLink href="/galeria">
              GALERIA
            </ActiveLink>

            <ActiveLink href="/contato">
              CONTATO
            </ActiveLink>

          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default Navbar;
