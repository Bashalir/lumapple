import React from 'react';
import Home from './Home';

export default {
  component: Home,
  title: 'Home',
};

export const Default = () => (
  <Home
    routes=" [
  {
    path: '/se-connecter',
    component: Signup,
  },
]"
  />
);

Default.parameters = {backgrounds: {default: 'default'}};
