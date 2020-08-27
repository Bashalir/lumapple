import React from 'react';
import PropTypes from 'prop-types';

import {CardImage} from '../../atoms/card/Card';
import StyledModelCard from './style/StyledModelCard';
import Label from '../../atoms/label/Label';

export default function ModelCard({image, name}) {
  return (
    <StyledModelCard>
      <figure>
        <CardImage image={image} name={name} />
      </figure>
      <Label title={name} />
    </StyledModelCard>
  );
}

ModelCard.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};
