import { styled } from '@/config/stitches.config';

import backgroundSpiral from '../../../assets/background.svg';

export const StyledSectionHero = styled('section', {
  padding: 10,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: 'calc(100vh - 100px)',

  backgroundImage: `url(${backgroundSpiral})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
});
