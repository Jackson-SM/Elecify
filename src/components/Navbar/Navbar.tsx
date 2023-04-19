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
      <div>
        <Button button="primary" style={{ marginRight: 20 }}>
          Registre-se
        </Button>
        <Button as="a">Entrar</Button>
      </div>
    </StylesNav.StyledHeader>
  );
};
