import styled from 'styled-components'; //css

const StyledModelCard = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  width: 100px;
  height: 110px;

  img {
    z-index: 3;
    animation: photo-position--out 250ms;
    object-position: 100% 25px;
  }
  span {
    margin-top: 10px;
  }

  @keyframes photo-position--in {
    from {
      object-position: 100% 25px;
    }
    to {
      object-position: 100% 10px;
    }
  }

  @keyframes photo-position--out {
    from {
      object-position: 100% 10px;
    }
    to {
      object-position: 100% 25px;
    }
  }
  :hover {
    img {
      animation: photo-position--in 250ms;
      object-position: 100% 10px;
      /* transform: translateY(-20px); */
    }

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

export default StyledModelCard;
