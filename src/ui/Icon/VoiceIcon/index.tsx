import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { theme } from 'src/styles';
import { IconProps } from '../types';

export const VoiceIcon: FC<IconProps> = ({ color = theme.color.gray2 }) => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 1.36365C11.6569 1.36365 13 2.58469 13 4.09092V10.4546C13 11.9608 11.6569 13.1818 10 13.1818C8.34315 13.1818 7 11.9608 7 10.4546V4.09092C7 2.58469 8.34315 1.36365 10 1.36365ZM15.25 7.27274C14.8358 7.27274 14.5 7.578 14.5 7.95456V10.4546C14.5 12.7139 12.4853 14.5455 10 14.5455C7.51472 14.5455 5.5 12.7139 5.5 10.4546V7.95456C5.5 7.578 5.16421 7.27274 4.75 7.27274C4.33579 7.27274 4 7.578 4 7.95456V10.4546C4.00148 13.2024 6.25111 15.5202 9.25 15.8636V17.2727H7.25C6.83579 17.2727 6.5 17.578 6.5 17.9546C6.5 18.3311 6.83579 18.6364 7.25 18.6364H12.75C13.1642 18.6364 13.5 18.3311 13.5 17.9546C13.5 17.578 13.1642 17.2727 12.75 17.2727H10.75V15.8636C13.7489 15.5202 15.9985 13.2024 16 10.4546V7.95456C16 7.578 15.6642 7.27274 15.25 7.27274Z"
      fill={color}
    />
  </Svg>
);
