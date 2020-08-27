import React from 'react';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

export const Default = () => <Button name="Button" />;

Default.parameters = {backgrounds: {default: 'default'}};
