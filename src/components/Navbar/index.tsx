import React from 'react';
import * as StylesNav from './styles';
import { Logo } from '../Logo';
import { LinksNavbar } from '../LinksNavbar';

export const Navbar = () => {
  return (
    <StylesNav.StyledHeader>
      <Logo />
      <LinksNavbar />
    </StylesNav.StyledHeader>
  );
};
