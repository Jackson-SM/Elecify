import React from 'react';
import * as SCardAbout from './styles';
import { TextGradient } from '@/components/TextGradient';

type CardAboutProps = React.ComponentProps<typeof SCardAbout.CardAbout> & {
  title: string;
  icon: JSX.Element;
};

export const CardAbout = ({ title, icon, children }: CardAboutProps) => {
  return (
    <SCardAbout.CardAbout>
      <SCardAbout.Header>
        {icon}
        <TextGradient themeGradient="with_color_dark_2" size="lg">
          {title}
        </TextGradient>
      </SCardAbout.Header>
      <SCardAbout.Content>
        <p>{children}</p>
      </SCardAbout.Content>
    </SCardAbout.CardAbout>
  );
};
