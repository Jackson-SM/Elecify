import { styled } from '@/config/stitches.config';

export const CardAbout = styled('div', {
  width: '100%',
  borderRadius: '5px',
  padding: '20px',

  backgroundColor: '$backgroundLight',

  zIndex: '1',

  display: 'flex',
  flexDirection: 'column',
  gap: 10,

  transition: 'transform ease-in 100ms',

  '&:hover': {
    transform: 'scale(1.05)',
  },
});

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  gap: 20,

  '& svg': {
    color: '$primary',
    width: '3.5rem',
    height: '3.5rem',
  },
});

export const Content = styled('div', {
  textOverflow: 'ellipsis',

  '& p': {
    color: '$textDark2',
    fontSize: '$sm',

    '& > span': {
      color: '$secondary',
      fontWeight: 'bold',
    },
  },
});
