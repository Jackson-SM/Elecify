import { styled } from '@/config/stitches.config';

export const StyledLogo = styled('div', {
  width: '15rem',
  display: 'flex',
  alignItems: 'center',

  '& img': {
    width: '100%',
    height: '100%',
  },

  variants: {
    hideText: {
      true: {
        '& > span': {
          display: 'none',
        },
      },
    },
  },
});

export const LogoVacuumText = styled('span', {
  fontFamily: 'Montserrat, monospace',
  fontSize: '2rem',

  '& > span': {
    color: '$primary',
    fontWeight: 'bold',
  },
});
