import { styled } from '@/config/stitches.config';

export const NavLinks = styled('nav', {});
export const NavList = styled('ul', {
  listStyle: 'none',

  display: 'flex',
  gap: 15,
});
export const NavItem = styled('li', {});

export const NavLink = styled('a', {
  color: '$text',
  textDecoration: 'none',
  fontSize: '0.9rem',

  transition: 'color ease 130ms',

  '&:hover': {
    color: '$primary',
  },
});
