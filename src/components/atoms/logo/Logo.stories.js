import React from 'react';
import Logo from './Logo';

export default {
  component: Logo,
  title: 'Logo',
};

export const Default = () => <Logo />;

Default.parameters = {backgrounds: {default: 'inverted'}};
