import React from 'react';

import Input from '../../atoms/input/Input';
import StyledSearchInput from './styles/StyledSearchInput';
import {SearchIcon} from './img/SearchIcon';

export default function SearchInput() {
  return (
    <StyledSearchInput className="search_input">
      <Input placeholder="Rechercher" type="search">
        <SearchIcon />
      </Input>
    </StyledSearchInput>
  );
}
