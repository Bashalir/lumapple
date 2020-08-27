import styled from 'styled-components'; //css

const StyledProductPhoto = styled.div`
  display: flex;
  align-content: center;
  width: 120px;
  height: 120px;
  background-color: white;
  border-top-left-radius: 1em;
  border-bottom-left-radius: 1em;

  img {
    display: block;
    max-height: 120px;
    max-width: 120px;
    width: auto;
    height: auto;
    border-top-left-radius: 1em;
    border-bottom-left-radius: 1em;
  }
`;
export default StyledProductPhoto;
