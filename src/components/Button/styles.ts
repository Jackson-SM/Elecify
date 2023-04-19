import { styled } from '@/config/stitches.config';

export const StyledButton = styled('button', {
  textDecoration: 'none',

  defaultVariants: {
    linked: 'true',
  },

  variants: {
    button: {
      primary: {
        width: '6rem',
        height: '2.5rem',

        cursor: 'pointer',

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
  },
});
