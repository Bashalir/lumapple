import React from 'react';
import NavBar from './NavBar';

export default {
  component: NavBar,
  title: 'NavBar',
};

export const Default = () => <NavBar />;

Default.parameters = {backgrounds: {default: 'inverted'}};
