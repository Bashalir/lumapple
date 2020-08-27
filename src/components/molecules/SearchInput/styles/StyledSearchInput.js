import styled from 'styled-components'; //css

const StyledSearchInput = styled.div`
  input {
    width: calc(100% - 24px);
    padding-inline-end: 10px;
  }
  svg {
    height: 45px;
    min-width: 24px;
  }
`;

export default StyledSearchInput;
