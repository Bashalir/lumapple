import React, {useState} from 'react';

import Burger from '../../atoms/Burger/Burger';
import StyledMenuBurger from './styles/StyledMenuBurger';
import LeftMenu from '../../molecules/LeftMenu/LeftMenu';
import PictoClose from './img/close.svg';

const MenuBurger = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledMenuBurger open={open} onClick={() => setOpen(!open)}>
      <Burger />
      <div className="left-menu">
        <LeftMenu open={open} />
        <div className="close-menu">
          <img src={PictoClose} alt="fermer" />
        </div>
      </div>
    </StyledMenuBurger>
  );
};

export default MenuBurger;
