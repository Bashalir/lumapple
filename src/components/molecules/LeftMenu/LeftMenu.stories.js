import React from 'react';
import LeftMenu from './LeftMenu';

export default {
  component: LeftMenu,
  title: 'LeftMenu',
};

export const Default = () => <LeftMenu />;

Default.parameters = {backgrounds: {default: 'inverted'}};
