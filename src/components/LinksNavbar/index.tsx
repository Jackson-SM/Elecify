import React from 'react';
import * as Nav from './styles';

export const LinksNavbar = () => {
  return (
    <Nav.NavLinks>
      <Nav.NavList>
        <Nav.NavItem>
          <Nav.NavLink href="#">Início</Nav.NavLink>
        </Nav.NavItem>
        <Nav.NavItem>
          <Nav.NavLink href="#">Serviços</Nav.NavLink>
        </Nav.NavItem>
        <Nav.NavItem>
          <Nav.NavLink href="#">Sobre nós</Nav.NavLink>
        </Nav.NavItem>
        <Nav.NavItem>
          <Nav.NavLink href="#">Contato</Nav.NavLink>
        </Nav.NavItem>
      </Nav.NavList>
    </Nav.NavLinks>
  );
};
