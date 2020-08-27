import {css} from 'styled-components';
import {defaultTheme} from './index';

export const resetPositionMixin = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const shadowMixin = css`
  box-shadow: 4px 4px 11px
      ${props =>
        props.isInverted
          ? defaultTheme.shadowDarkenInvertedColor
          : defaultTheme.shadowDarkenPrimaryColor},
    -4px -4px 11px
      ${props =>
        props.isInverted
          ? defaultTheme.shadowLightInvertedColor
          : defaultTheme.shadowLightPrimaryColor};
`;

export const shadowInMixin = css`
  box-shadow: inset 4px 4px 11px
      ${props =>
        props.isInverted
          ? defaultTheme.shadowDarkenInvertedColor
          : defaultTheme.shadowDarkenPrimaryColor},
    inset -4px -4px 11px
      ${props =>
        props.isInverted
          ? defaultTheme.shadowLightInvertedColor
          : defaultTheme.shadowLightPrimaryColor};
`;
