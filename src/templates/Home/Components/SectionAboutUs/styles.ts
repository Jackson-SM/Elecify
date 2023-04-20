import { styled } from '@/config/stitches.config';

export const StyledSectionAboutUs = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))',
  background: 'linear-gradient(to left, transparent 70%, $primary 200%)',
  gap: 20,

  padding: '0 20px',
});
