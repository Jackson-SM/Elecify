import React from 'react';
import { StyledTextGradient } from './styles';

export type TextGradientProps = React.ComponentProps<
  typeof StyledTextGradient
> & {
  as?: string;
};

export const TextGradient = ({ children, ...props }: TextGradientProps) => {
  return <StyledTextGradient {...props}>{children}</StyledTextGradient>;
};
