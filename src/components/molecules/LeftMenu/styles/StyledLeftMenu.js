import styled from 'styled-components';

import {defaultTheme} from '../../../../themes';
import StyledLogo from '../../../atoms/logo/styles/StyledLogo';

const StyledLeftMenu = styled.div`
  display: grid;
  grid-template-rows: 5rem 2rem 2rem auto;
  height: 100vh;
  width: 80%;
  background-color: ${defaultTheme.backgroundDefaultColor};
  color: ${defaultTheme.textPrimaryColor};

  span {
    cursor: pointer;
    margin: 0 10px;
    font-size: ${defaultTheme.typeScale.helper};

    img {
      margin: 0 10px;
      height: 24px;
      width: 24px;
    }
  }

  ${StyledLogo} {
    justify-content: center;
    justify-self: center;
    display: flex;
    height: 4rem;
    text-align: center;

    .logo {
      height: 3rem;
      width: 10rem;
      align-self: center;
      margin: 0;
    }
  }
`;

export default StyledLeftMenu;
