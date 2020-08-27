import React from 'react';
import ProductCard from './ProductCard';

import MacbookPro from './img/macbook_pro.jpeg';

export default {
  component: ProductCard,
  title: 'ProductCard',
};

export const Default = () => {
  return (
    <div>
      <ProductCard
        photo={MacbookPro}
        name="MacBook Pro"
        title="MacBook Pro Mi-2017"
        short_description="13.3” Core i5 2.3 ghz"
        description="8 Go RAM 256 Go SSD"
        price="1099 €"
      />
    </div>
  );
};

Default.parameters = {backgrounds: {default: 'default'}};
