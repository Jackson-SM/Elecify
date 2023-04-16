import React from 'react';
import { StyledTextGradient } from './styles';

export type TextGradientProps = React.ComponentProps<typeof StyledTextGradient>;

export const TextGradient = ({ children, ...props }: TextGradientProps) => {
  return <StyledTextGradient {...props}>{children}</StyledTextGradient>;
};
