import { keyframes, styled } from '@/config/stitches.config';

const rotateBackgroundHero = keyframes({
  '0%': {
    transform: 'rotate(0)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const StyledSectionHero = styled('section', {
  padding: 10,

  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  height: 'calc(100vh - 100px)',

  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',

  background: 'linear-gradient(to left, transparent 70%, $primary 200%)',
});

export const StyledBackgroundHero = styled('div', {
  position: 'absolute',

  width: '100%',
  height: '100%',

  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& img': {
    animation: `${rotateBackgroundHero} ease-in-out 20s alternate infinite`,
    height: '100%',
    width: '100%',
    zIndex: '-1',
  },
});

export const StyledContentHero = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,

  maxWidth: '60%',

  '@screenDisplay': {
    maxWidth: '100%',
  },
});
