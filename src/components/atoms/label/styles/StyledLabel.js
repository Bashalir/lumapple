import styled from 'styled-components'; //css
import {defaultTheme} from '../../../../themes';

const StyledLabel = styled.span`
  font-size: 1rem;
  font-weight: 800;
  z-index: 1;
  position: relative;
  content: ${props => props.name};
  color: ${props => props.textColor};
  font-family: ${defaultTheme.primaryFont};
`;

export default StyledLabel;
