import styled from 'styled-components'; //css

const StyledCategoryCard = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  width: 100px;
  height: 110px;

  figure {
    width: 75px;
    height: 75px;
  }

  img {
    z-index: 3;
    width: 50px;
    height: 50px;
  }
  span {
    margin-top: 9px;
  }

  :hover {
    figure {
      ::before {
        opacity: 0;
      }
      ::after {
        opacity: 1;
      }
    }
    label {
      ::before {
        opacity: 1;
      }
    }
  }

  :active {
    figure {
      transform: scale(0.98);
    }

    label {
      ::before {
        opacity: 0;
      }
    }
  }
`;

export default StyledCategoryCard;
