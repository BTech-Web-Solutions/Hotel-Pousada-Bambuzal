import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Logo from '../images/logo.png';
import styled from 'styled-components';
import ActiveLink from './ActiveLink';

const Navbar = () => {
  return (
    <MainNav>
      <Link href="/">
        <Image src={Logo} alt="Logo" />
      </Link>
      <div className='text-links' >
        <ActiveLink href="/">INÍCIO</ActiveLink>
        <ActiveLink href="/sobre">SOBRE</ActiveLink>
        <ActiveLink href="/acomodacoes">ACOMODAÇÕES</ActiveLink>
        <ActiveLink href="/galeria">GALERIA</ActiveLink>
        <ActiveLink href="/contato">CONTATO</ActiveLink>
      </div>
    </MainNav>
  );
};

export default Navbar;

const MainNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  background-color: #000000;
  /* position: absolute; */

  img {
    width: 25%;
    height: 25%;
  }

  .text-links a {
    text-decoration: none;
    color: #FFFF;
    font-size: 1rem;
    font-weight: 600;
    margin: 0.7rem;
    text-shadow: 0 0 3px #000000;
  }

  .text-links a:hover {
    text-decoration: underline;

  }

  .text-links a.active {
    text-decoration: underline;
  }
  
`;