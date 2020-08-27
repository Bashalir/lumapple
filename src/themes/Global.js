import {createGlobalStyle} from 'styled-components';
import {defaultTheme} from './themes';
import {primaryFont, typeScale} from './typography';
import {normalize} from 'polished';
import reset from './reset.css';

export const GlobalStyle = createGlobalStyle`
${reset}
${normalize()}

html {
  font-size: 16px;
  box-sizing: border-box;
}

*,*:before, *:after {
  box-sizing: inherit;
}

body {
  font-family: ${primaryFont}
}

a:link {
  text-decoration: none;
}

h5 {
  font-size: ${typeScale.small};
  font-weight: bold;

  @media (min-width: ${defaultTheme.breakpoint}) {
    font-size: ${typeScale.header5};
  }
}

br {
  margin: 3px;
}
p, span {
  margin: 0;
  font-size: ${typeScale.small};
  @media (min-width: ${defaultTheme.breakpoint}) {
    font-size: ${typeScale.paragraph};
  }
}

`;
