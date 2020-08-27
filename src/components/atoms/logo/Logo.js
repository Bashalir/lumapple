import React from 'react';
import PropTypes from 'prop-types';

import StyledLogo from './styles/StyledLogo';
import LogoLumapple from './img/logoLumapple.svg';
import LogoLumappleInverted from './img/logoLumapple_inverted.svg';

export default function Logo({isInverted}) {
  return (
    <StyledLogo className="logo_lumapple" isInverted={isInverted}>
      <img
        className="logo"
        src={isInverted ? LogoLumappleInverted : LogoLumapple}
        alt="Lumapple"
      />
    </StyledLogo>
  );
}

Logo.defaultProps = {
  isInverted: false,
};

Logo.displayName = 'Logo';
Logo.propTypes = {
  isInverted: PropTypes.bool,
};
