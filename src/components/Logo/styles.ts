import { styled } from '@/config/stitches.config';

export const StyledLogo = styled('div', {
  width: '22rem',
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
