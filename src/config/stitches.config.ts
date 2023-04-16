import { createStitches } from '@stitches/react';

export const { styled, keyframes, getCssText, theme, css, globalCss } =
  createStitches({
    theme: {
      colors: {
        background: '#262D34',
        backgroundLight2: '#2C353D',

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
    },
    utils: {
      linearGradient: (value: string) => ({
        backgroundImage: `linear-gradient(${value})`,
      }),
    },
  });
