import styled from 'styled-components';

import {defaultTheme} from '../../../../themes';

const StyledSignIn = styled.div`
  display: flex;
  flex-flow: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  white-space: nowrap;
  margin: 0px 10px;
  width: 120px;
  height: 45px;

  span {
    margin-top: 5px;
    color: ${defaultTheme.textColorInverted};
  }
`;

export default StyledSignIn;
