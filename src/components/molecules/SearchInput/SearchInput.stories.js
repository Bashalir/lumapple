import React from 'react';

import SearchInput from './SearchInput';

export default {
  component: SearchInput,
  title: 'SearchInput',
};

export const Default = () => <SearchInput />;

Default.parameters = {backgrounds: {default: 'default'}};
