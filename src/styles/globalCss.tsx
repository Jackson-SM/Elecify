import { globalCss } from '@/config/stitches.config';

export const GlobalCss = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    fontFamily: 'Poppins, sans-serif',
  },

  body: {
    background: '$background',
    color: '$text',
  },
});
