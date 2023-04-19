import { globalCss } from '@/config/stitches.config';

export const GlobalCss = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    fontFamily: '$poppins',
  },

  html: {
    fontSize: '$normal',
    '@screenMobile2': {
      fontSize: '$mobile',
    },
  },

  body: {
    background: '$background',
    color: '$text',
  },
});
