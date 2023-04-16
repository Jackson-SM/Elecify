import { keyframes, styled } from '@/config/stitches.config';

const animationColorsGradient = keyframes({
  '0%': {
    backgroundPosition: '0',
  },
  '100%': {
    backgroundPosition: '300%',
  },
});

export const StyledTextGradient = styled('span', {
  fontSize: '3rem',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',

  zIndex: '1',

  position: 'relative',

  defaultVariants: {
    themeGradient: 'animationGradient',
  },

  variants: {
    themeGradient: {
      gradient1: {
        linearGradient: 'to right, $primary, $primary3',
      },
      gradient2: {
        linearGradient: 'to right, $secondary, $secondary3',
      },
      gradient3: {
        linearGradient: 'to right, $tertiary, $tertiary3',
      },
      animationGradient: {
        backgroundSize: '300%',
        backgroundPosition: '0',
        linearGradient:
          'to right, $primary 50%, $primary3, $tertiary 100%, $tertiary3, $secondary 50%, $secondary3',
        animation: `${animationColorsGradient} ease-in-out 10s infinite`,
      },
    },
  },
});
