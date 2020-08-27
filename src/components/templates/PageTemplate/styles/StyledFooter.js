import styled from 'styled-components';
import {defaultTheme} from '../../../../themes';

const StyledFooter = styled.footer`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;

  background-color: ${defaultTheme.backgroundFooterColor};
  div:nth-child(1) {
    max-width: ${defaultTheme.maxWidth};
  }
`;

export default StyledFooter;
