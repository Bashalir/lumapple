import React from 'react';

import addPlus from '../../../assets/img/add_plus.svg';
import {defaultTheme} from '../../../themes';
import IconButton, {SellNow} from './IconButton';

export default {
  component: IconButton,
  title: 'IconButton',
};

export const Default = () => (
  <IconButton
    backgroundColor={defaultTheme.backgroundInvertedColor}
    name="Vendez maintenant"
    icon={addPlus}
    isInverted="true"
  />
);

export const AddButton = () => <SellNow />;

Default.parameters = {backgrounds: {default: 'inverted'}};
AddButton.parameters = {backgrounds: {default: 'inverted'}};
