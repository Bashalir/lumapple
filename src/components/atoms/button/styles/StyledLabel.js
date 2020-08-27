import styled from 'styled-components'; //css
import {defaultTheme} from '../../../../themes';

const StyledLabel = styled.span`
  font-size: 1rem;
  font-weight: 800;
  text-align: center;
  position: relative;
  z-index: 1;
  white-space: nowrap;
  
  ::after {
    text-align: center;
    content: "${props => props.name}";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    color: ${defaultTheme.textColor};
    transition: opacity 500ms;
  }
`;

export default StyledLabel;
