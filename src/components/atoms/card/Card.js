import React from 'react';
import PropTypes from 'prop-types';

import StyledCard from './styles/StyledCard';
import {defaultTheme} from '../../../themes';

export default function Card({textColor, backgroundColor, children}) {
  return (
    <StyledCard textColor={textColor} backgroundColor={backgroundColor}>
      {children}
    </StyledCard>
  );
}

export const CardImage = ({image, name, textColor, backgroundColor}) => {
  return (
    <Card textColor={textColor} backgroundColor={backgroundColor}>
      <img src={image} name={name} alt={name}></img>
    </Card>
  );
};

CardImage.propTypes = {
  image: PropTypes.object,
  name: PropTypes.object,

  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};

Card.propTypes = {
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
};

Card.defaultProps = {
  backgroundColor: defaultTheme.backgroundDefaultColor,
  textColor: defaultTheme.textColor,
};

CardImage.defaultProps = {
  backgroundColor: defaultTheme.backgroundDefaultColor,
  textColor: defaultTheme.textColor,
};
