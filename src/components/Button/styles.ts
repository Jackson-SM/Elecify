import { styled } from '@/config/stitches.config';

export const StyledButton = styled('button', {
  textDecoration: 'none',
  cursor: 'pointer',
  fontSize: '$sm_x',
  width: 'max-content',

  defaultVariants: {
    linked: 'true',
    size: 'sm',
  },

  variants: {
    button: {
      primary: {
        background: '$primary',
        color: 'white',

        padding: '0 10px',
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

        transition: 'color ease 130ms',

        '&:hover': {
          color: '$primary',
        },
      },
    },
    size: {
      sm: {
        height: '4.5rem',
      },
      md: {
        height: '5rem',
      },
      lg: {
        height: '5.5rem',
      },
    },
  },
});
