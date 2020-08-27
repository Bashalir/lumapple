import styled from 'styled-components';
import {defaultTheme} from '../../../../themes';

const StyledHeader = styled.header`
  display: grid;
  width: 100%;
  background-color: ${defaultTheme.backgroundInvertedColor};
  justify-items: center;
  align-items: center;
  .navbar {
    width: 100%;
  }

  @media (min-width: ${defaultTheme.breakpoint}) {
    .navbar {
      max-width: ${defaultTheme.maxWidth};
    }
  }
`;

export default StyledHeader;
