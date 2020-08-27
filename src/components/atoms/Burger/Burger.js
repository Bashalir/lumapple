import React from 'react';

import IconMenu from './img/menu.svg';
import StyledBurger from './styles/StyledBurger';

export default function Burger() {
  return (
    <StyledBurger>
      <img src={IconMenu} alt="menu" />
    </StyledBurger>
  );
}
