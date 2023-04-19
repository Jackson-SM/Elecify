import React from 'react';
import * as Styled from './styles';

type LinkProps = React.ComponentProps<typeof Styled.StyledButton> &
  React.HTMLProps<HTMLAnchorElement> & {
    as?: string;
  };

export const Button = ({ children, ...props }: LinkProps) => {
  return <Styled.StyledButton {...props}>{children}</Styled.StyledButton>;
};
