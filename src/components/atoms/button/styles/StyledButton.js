import styled from 'styled-components';
import {
  defaultTheme,
  resetPositionMixin,
  shadowMixin,
  shadowInMixin,
} from '../../../../themes';

const StyledButton = styled.button`
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;
  align-content: center;
  cursor: pointer;
  border: 0px;
  border-radius: 3em;
  font-family: ${defaultTheme.primaryFont};
  background: ${props => props.backgroundColor};
  color: ${props =>
    props.isInverted ? defaultTheme.textColorInverted : defaultTheme.textColor};

  padding: 10px 20px;
  position: relative;
  outline: 0;
  ::before {
    ${resetPositionMixin}
    z-index: 1;
    opacity: 1;
    content: '';
    border-radius: 3em;
    ${shadowMixin}
    transition: opacity 750ms;
  }
  ::after {
    z-index: -1;
    content: '';
    ${resetPositionMixin}
    opacity: 0;
    border-radius: 3em;
    ${shadowInMixin}
    transition: opacity 750ms;
  }
  :hover {
    ::before {
      opacity: 0;
    }
    ::after {
      opacity: 1;
    }
  }
  :active {
    transform: scale(0.98);
  }
`;

export default StyledButton;
