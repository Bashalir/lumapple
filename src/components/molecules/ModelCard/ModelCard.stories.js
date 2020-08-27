import React from 'react';
import ModelCard from './ModelCard';

import IphoneXR from './img/iphone_xr.png';

export default {
  component: ModelCard,
  title: 'ModelCard',
};

export const Default = () => <ModelCard name="iPhone XR" image={IphoneXR} />;

Default.parameters = {backgrounds: {default: 'default'}};
