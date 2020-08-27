import React from 'react';
import PropTypes from 'prop-types';

import {defaultTheme} from '../../../themes';
import StyledLabel from './styles/StyledLabel';

export default function Label({title, textColor}) {
  return (
    <StyledLabel title={title} textColor={textColor}>
      {title}
    </StyledLabel>
  );
}

Label.propTypes = {
  title: PropTypes.string,
  textColor: PropTypes.string,
};

Label.defaultProps = {
  textColor: defaultTheme.textColor,
};
