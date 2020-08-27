import React from 'react';

import StyledNavBar from './styles/StyledNavBar';

import SignIn from '../../molecules/SignIn/SignIn';
import SearchInput from '../../molecules/SearchInput/SearchInput';
import {SellNow} from '../../molecules/IconButton/IconButton';
import Logo from '../../atoms/logo/Logo';
import MenuBurger from '../MenuBurger/MenuBurger';
import {Link} from 'react-router-dom';

export default function NavBar() {
  return (
    <StyledNavBar className="navbar">
      <nav>
        <MenuBurger />
        <Link to="/">
          <Logo />
        </Link>
        <SellNow />
        <SearchInput />
        <Link to="/se-connecter">
          <SignIn />
        </Link>
      </nav>
    </StyledNavBar>
  );
}
