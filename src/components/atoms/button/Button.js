import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './styles/StyledButton';
import StyledLabel from './styles/StyledLabel';
import {defaultTheme} from '../../../themes';

export default function Button({
  name,
  backgroundColor,
  isInverted,
  textColor,
  children,
}) {
  return (
    <StyledButton backgroundColor={backgroundColor} isInverted={isInverted}>
      {children}
      <StyledLabel name={name} textColor={textColor}>
        {name}
      </StyledLabel>
    </StyledButton>
  );
}

Button.defaultProps = {
  backgroundColor: defaultTheme.backgroundDefaultColor,
  textColor: defaultTheme.textColor,
  isInverted: false,
};

Button.displayName = 'Button';
Button.propTypes = {
  isInverted: PropTypes.bool,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node,
};
