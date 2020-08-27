import React from 'react';
import SignIn from './SignIn';

export default {
  component: SignIn,
  title: 'SignIn',
};

export const Default = () => <SignIn />;

Default.parameters = {backgrounds: {default: 'inverted'}};
