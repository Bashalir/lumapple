import styled from 'styled-components';
import {defaultTheme} from '../../../../themes';

const StyledMain = styled.section`
  width: 100%;
  padding: 0px;
  background-color: ${defaultTheme.backgroundDefaultColor};
  min-height: calc(100vh - (86px + 60px));
  div:nth-child(1) {
    max-width: ${defaultTheme.maxWidth};
  }
`;

export default StyledMain;
