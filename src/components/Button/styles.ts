import { styled } from '@/config/stitches.config';

export const StyledButton = styled('button', {
  textDecoration: 'none',
  cursor: 'pointer',

  defaultVariants: {
    linked: 'true',
    size: 'sm',
  },

  variants: {
    button: {
      primary: {
        background: '$primary',
        color: 'white',

        border: '0',
        borderRadius: '3px',

        transition: 'background ease 130ms',

        '&:hover': {
          color: 'white',
          background: '$primary2',
        },
      },
    },
    linked: {
      true: {
        color: '$text',
        fontSize: '0.9rem',

        transition: 'color ease 130ms',

        '&:hover': {
          color: '$primary',
        },
      },
    },
    size: {
      sm: {
        width: '6.5rem',
        height: '3rem',
      },
      md: {
        width: '8rem',
        height: '3.5rem',
      },
      lg: {
        width: '15rem',
        height: '3.5rem',
      },
    },
  },
});
