import React, { FC } from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';
import { theme } from 'src/styles';

interface LocationIconProps {
  focused: boolean;
}

export const LocationIcon: FC<LocationIconProps> = ({ focused }) => (
  <Svg width="29" height="28" viewBox="0 0 29 28" fill="none">
    <G clip-path="url(#clip0_2739_576)">
      <Path
        d="M14.2221 22.6664C18.8244 22.6664 22.5554 18.9355 22.5554 14.3332C22.5554 9.73091 18.8244 6 14.2221 6C9.61983 6 5.88892 9.73091 5.88892 14.3332C5.88892 18.9355 9.61983 22.6664 14.2221 22.6664Z"
        fill={focused ? theme.color.primary : 'transparent'}
        stroke={focused ? theme.color.primary : theme.color.icon_default}
        stroke-width="2"
        stroke-miterlimit="10"
      />
      <Path
        d="M22.4241 15.8155C25.4902 18.2759 27.1954 20.4508 26.6069 21.469C25.6772 23.0758 19.3788 21.1836 12.5393 17.2425C5.69985 13.3014 0.908246 8.80411 1.8374 7.19789C2.41864 6.19373 5.09673 6.55623 8.69356 7.93173"
        fill={focused ? theme.color.primary : 'transparent'}
        stroke={focused ? theme.color.white : theme.color.icon_default}
        stroke-width="2"
        stroke-miterlimit="10"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_2739_576">
        <Rect
          width="28"
          height="28"
          fill="white"
          transform="translate(0.722168)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
