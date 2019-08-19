import React, { useContext } from 'react';
import Store from '../../context/Store';
import config from '../../config/config';
import Placeholder from '../Placeholder/Placeholder';
import ProductCard from '../ProductCard/ProductCard';
import LinkButton from '../LinkButton/LinkButton';

const Products = () => {
  const { products } = useContext(Store);

  return (
    <div>
      {products.length ?
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {products.map(product => <ProductCard key={product.id} product={product} />)}
          <LinkButton to={config.CART_ROUTE}>Go to cart</LinkButton>
        </div> :
        <Placeholder message={config.DATA_WAITING_MESSAGE}/>
      }
    </div>
  );
}

export default Products;