import React from 'react';
import { StyledCardAbout } from './styles';
import { TextGradient } from '@/components/TextGradient';

type CardAboutProps = React.ComponentProps<typeof StyledCardAbout> & {
  title: string;
};

export const CardAbout = ({ title }: CardAboutProps) => {
  return (
    <StyledCardAbout>
      <TextGradient size="md_large">{title}</TextGradient>
    </StyledCardAbout>
  );
};
