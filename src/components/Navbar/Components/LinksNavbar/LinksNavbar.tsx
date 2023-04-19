import React from 'react';

import * as Nav from './styles';
import { Button } from '@/components/Button';

export const LinksNavbar = () => {
  return (
    <Nav.NavLinks>
      <Nav.NavList>
        <Nav.NavItem>
          <Button as="a" href="#">
            Início
          </Button>
        </Nav.NavItem>
        <Nav.NavItem>
          <Button as="a" href="#">
            Serviços
          </Button>
        </Nav.NavItem>
        <Nav.NavItem>
          <Button as="a" href="#">
            Sobre nós
          </Button>
        </Nav.NavItem>
        <Nav.NavItem>
          <Button as="a" href="#">
            Contato
          </Button>
        </Nav.NavItem>
      </Nav.NavList>
    </Nav.NavLinks>
  );
};
