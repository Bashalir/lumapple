import styled from 'styled-components'; //css
import {
  defaultTheme,
  resetPositionMixin,
  shadowMixin,
  shadowInMixin,
} from '../../../../themes';

const StyledCard = styled.div`
  text-align: center;

  color: ${({textColor}) => textColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0px;
  border-radius: 1em;
  width: 75px;
  height: 75px;
  position: relative;
  outline: 0;

  ::before {
    ${resetPositionMixin}
    background-color: ${defaultTheme.backgroundDefaultColor};
    z-index: 1;
    opacity: 1;
    content: '';
    border-radius: 1em;
    ${shadowMixin}
    transition: opacity 750ms;
  }
  ::after {
    background-color: ${defaultTheme.backgroundDefaultColor};
    z-index: -1;
    content: '';
    ${resetPositionMixin}
    opacity: 0;
    border-radius: 1em;
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
`;

export default StyledCard;
