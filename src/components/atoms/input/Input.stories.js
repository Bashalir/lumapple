import React from 'react';
import Input from './Input';

export default {
  component: Input,
  title: 'Input',
};

export const Default = () => <Input placeholder="Rechercher" type="search" />;

Default.parameters = {backgrounds: {default: 'default'}};
