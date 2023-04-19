import { keyframes, styled } from '@/config/stitches.config';

const animationColorsGradient = keyframes({
  '0%': {
    backgroundPosition: '0',
  },
  '100%': {
    backgroundPosition: '100%',
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
      with_color_dark: {
        WebkitBackgroundClip: 'initial',
        WebkitTextFillColor: 'initial',
        color: '$textDark',
      },
      with_color_dark_2: {
        WebkitBackgroundClip: 'initial',
        WebkitTextFillColor: 'initial',
        color: '$textDark2',
      },
      without_color: {
        WebkitBackgroundClip: 'initial',
        WebkitTextFillColor: 'initial',
        color: '$text',
      },
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
          'to right, $primary 10%, $primary2, $secondary, $secondary2, $tertiary, $tertiary2',
        animation: `${animationColorsGradient} ease-in-out 5s alternate infinite`,
      },
    },

    size: {
      sm: {
        fontSize: '$sm',
      },
      sm_large: {
        fontSize: '$sm_x',
      },
      md: {
        fontSize: '$md',
      },
      md_large: {
        fontSize: '$md_x',
      },
      lg: {
        fontSize: '$lg',
      },
      lg_large: {
        fontSize: '$lg_x',
      },
      lg_largexx: {
        fontSize: '$lg_xx',
      },
    },
  },
});
