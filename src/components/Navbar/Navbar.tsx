import React from 'react';
import * as StylesNav from './styles';
import { Logo } from '../Logo';
import { LinksNavbar } from './Components/LinksNavbar';
import { Button } from '../Button';

export const Navbar = () => {
  return (
    <StylesNav.StyledHeader>
      <Logo />
      <LinksNavbar />
      <Button button="primary">Entrar</Button>
    </StylesNav.StyledHeader>
  );
};
