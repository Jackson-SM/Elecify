import { styled } from '@/config/stitches.config';

export const CardAbout = styled('div', {
  width: '100%',
  height: '20rem',
  borderRadius: '5px',
  padding: '20px',

  backgroundColor: '$backgroundLight',

  zIndex: '1',

  display: 'flex',
  flexDirection: 'column',
  gap: 10,

  '& p': {
    color: '$primary',
  },
});

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  gap: 10,

  '& svg': {
    color: '$primary',
    width: '3rem',
    height: '3rem',
  },
});

export const Content = styled('div', {});
