import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { theme } from 'src/styles';
import { IconProps } from '../types';

interface CharacterIconProps {
  focused: boolean;
}

export const CharacterIcon: FC<CharacterIconProps & IconProps> = ({
  focused,
  color = theme.color.primary,
}) => (
  <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <Path
      d="M14.0909 4C9.07778 4 5 8.03793 5 12.9998L5.05152 20.9997C5.29899 22.6907 6.75859 23.9996 8.53535 23.9996C9.72121 23.9996 10.6303 23.5826 11.2343 22.8257C11.61 23.199 12.0566 23.4951 12.5485 23.6966C13.0403 23.8982 13.5676 24.0013 14.0999 24C14.6322 23.9987 15.159 23.893 15.6498 23.689C16.1407 23.4851 16.5858 23.1869 16.9596 22.8117C17.5667 23.5736 18.4788 23.9996 19.6465 23.9996C21.596 23.9996 23.1818 22.4297 23.1818 20.4997V12.9998C23.1818 8.03793 19.104 4 14.0909 4Z"
      fill={focused ? color : 'transparent'}
      stroke={focused ? color : theme.color.icon_default}
      stroke-width="2"
    />
    <Path
      d="M10.9234 14.9662C12.1507 14.9662 13.1456 13.9713 13.1456 12.744C13.1456 11.5167 12.1507 10.5217 10.9234 10.5217C9.69609 10.5217 8.70117 11.5167 8.70117 12.744C8.70117 13.9713 9.69609 14.9662 10.9234 14.9662Z"
      fill={focused ? theme.color.white : theme.color.icon_default}
    />
    <Path
      d="M17.5899 14.9662C18.8172 14.9662 19.8121 13.9713 19.8121 12.744C19.8121 11.5167 18.8172 10.5217 17.5899 10.5217C16.3626 10.5217 15.3677 11.5167 15.3677 12.744C15.3677 13.9713 16.3626 14.9662 17.5899 14.9662Z"
      fill={focused ? theme.color.white : theme.color.icon_default}
    />
  </Svg>
);
