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
        <Button button="primary" css={{ marginRight: '20px' }}>
          Registre-se
        </Button>
        <Button as="a" linked>
          Entrar
        </Button>
      </div>
    </StylesNav.StyledHeader>
  );
};
