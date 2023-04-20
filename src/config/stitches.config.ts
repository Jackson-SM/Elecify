import { createStitches } from '@stitches/react';

export const { styled, keyframes, getCssText, theme, css, globalCss } =
  createStitches({
    theme: {
      colors: {
        background: '#262D34',
        backgroundLight: '#2C353D',

        darkPurple: '#1D112D',
        darkPurple2: '#301B4A',
        purple1: '#5D3A96',

        primary: '#6C54F6',
        primary2: '#503BC9',
        primary3: '#4837AB',

        secondary: '#FFB428',
        secondary2: '#FFBD43',
        secondary3: '#FFD966',

        tertiary: '#00BBFF',
        tertiary2: '#6bd8ff',
        tertiary3: '#9ae4ff',

        disabled: '#404040',

        text: '#FEFEFE',
        textDark: '#F1F1F1',
        textDark2: '#C3C3C3',
      },
      fontSizes: {
        normal: '10px',
        mobile: '8px',

        sm: '1.3rem',
        sm_x: '1.5rem',
        sm_xx: '1.6rem',

        md: '1.8rem',
        md_x: '2.2rem',

        lg: '2.4rem',
        lg_x: '3.2rem',
        lg_xx: '6rem',
      },
      fonts: {
        poppins: 'Poppins, sans-serif',
        montserrat: 'Montserrat, sans-serif',
      },
    },
    utils: {
      linearGradient: (value: string) => ({
        backgroundImage: `linear-gradient(${value})`,
      }),
    },
    media: {
      screenMobile: '(max-width: 640px)',
      screenMobile2: '(max-width: 768px)',
      screenTablet: '(max-width: 1024px)',
      screenDisplay: '(max-width: 1366px)',
      screenDisplay2: '(max-width: 1980px)',
    },
  });
