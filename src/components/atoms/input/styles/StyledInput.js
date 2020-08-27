import styled from 'styled-components'; //css
import {defaultTheme, shadowInMixin} from '../../../../themes';

const StyledInput = styled.div`
  background-color: ${defaultTheme.backgroundDefaultColor};
  display: flex;
  min-height: 45px;
  color: ${({textColor}) => textColor};
  border: 0px;
  border-radius: 2em;
  padding-inline-end: 15px;
  padding-inline-start: 15px;
  :focus {
    outline: 10px;
  }

  height: ${({height}) => height};

  ${shadowInMixin}

  input {
    width: ${({width}) => width};
    font-family: ${defaultTheme.primaryFont};
    color: ${({textColor}) => textColor};
    border: none;
    background: none;
  }
`;

export default StyledInput;
