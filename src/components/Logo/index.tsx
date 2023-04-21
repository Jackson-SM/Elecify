import React from 'react';
import LogoSvg from '../../assets/logo_2_without_letter.png';
import * as StyledLogo from './styles';
import { TextGradient } from '../TextGradient';

type LogoProps = React.ComponentProps<typeof StyledLogo.StyledLogo>;

export const Logo = (props: LogoProps) => {
  return (
    <StyledLogo.StyledLogo {...props}>
      <img src={`${LogoSvg}`} />
      <TextGradient themeGradient="with_color_dark">
        <span>V</span>acuum
      </TextGradient>
    </StyledLogo.StyledLogo>
  );
};
