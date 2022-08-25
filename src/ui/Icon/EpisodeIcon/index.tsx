import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { theme } from 'src/styles';

interface EpisodeIconProps {
  focused: boolean;
}

export const EpisodeIcon: FC<EpisodeIconProps> = ({ focused }) => (
  <Svg width="29" height="28" viewBox="0 0 29 28" fill="none">
    <Path
      d="M23.9991 8.16666H5.33248C4.04381 8.16666 2.99915 9.21133 2.99915 10.5V23.3333C2.99915 24.622 4.04381 25.6667 5.33248 25.6667H23.9991C25.2878 25.6667 26.3325 24.622 26.3325 23.3333V10.5C26.3325 9.21133 25.2878 8.16666 23.9991 8.16666Z"
      stroke={focused ? theme.color.primary : theme.color.icon_default}
      fill={focused ? theme.color.primary : 'transparent'}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M20.4991 2.33334L14.6657 8.16668L8.8324 2.33334"
      stroke={focused ? theme.color.primary : theme.color.icon_default}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
