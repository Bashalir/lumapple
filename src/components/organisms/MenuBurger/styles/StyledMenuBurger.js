import styled, {css} from 'styled-components';

import StyledLeftMenu from '../../../molecules/LeftMenu/styles/StyledLeftMenu';
import StyledBurger from '../../../atoms/Burger/styles/StyledBurger';

const StyledMenuBurger = styled.div`
  ${StyledBurger} {
    display: flex;
  }
  ${({open}) => (open ? menuOpen : menuClose)};
`;

const menuOpen = css`
  .left-menu {
    display: block;
    z-index: 2;
    cursor: pointer;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.6);

    ${StyledLeftMenu} {
      z-index: 3;
      cursor: default;
      display: grid;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
    }

    .close-menu {
      display: flex;
      margin-right: 1rem;
      float: right;
      height: 4rem;
      width: 20%;
      justify-content: flex-end;
      align-items: center;

      img {
        height: 32px;
        width: 32px;
      }
    }
  }
`;
const menuClose = css`
  .left-menu {
    display: none;
  }
`;

export default StyledMenuBurger;
