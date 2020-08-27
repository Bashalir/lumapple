import {green, neutral} from './colors';
import {primaryFont, secondaryFont, typeScale} from './typography';

export const defaultTheme = {
  primaryColor: green[200],
  primaryColorDarken: green[300],
  textColor: neutral[500],
  textColorInverted: neutral[100],
  textPrimaryColor: green[200],
  textSecondaryColor: neutral[400],
  backgroundDefaultColor: neutral[200],
  backgroundInvertedColor: green[200],
  backgroundFooterColor: neutral[500],
  shadowLightPrimaryColor: neutral[100],
  shadowDarkenPrimaryColor: neutral[300],
  shadowLightInvertedColor: green[100],
  shadowDarkenInvertedColor: green[300],
  typeScale,
  primaryFont,
  secondaryFont,
  breakpoint: '834px',
  maxWidth: '1066px',
};
