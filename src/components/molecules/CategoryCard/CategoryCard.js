import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../atoms/card/Card';
import StyledCategoryCard from './styles/StyledCategoryCard';
import Label from '../../atoms/label/Label';

export default function CategoryCard({image, name}) {
  return (
    <StyledCategoryCard>
      <figure>
        <Card name={name}>
          <img src={image} alt={name} />
        </Card>
      </figure>
      <Label title={name} />
    </StyledCategoryCard>
  );
}

CategoryCard.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};
