import React, { useContext, useCallback, useEffect } from 'react';
import Store from '../../context/Store';
import config from '../../config/config';
import CartItem from '../CartItem/CartItem';
import Placeholder from '../Placeholder/Placeholder';
import LinkButton from '../LinkButton/LinkButton';

const Cart = () => {
  const { localCart, setLocalCart } = useContext(Store);

  const renderCartProducts = useCallback(() => {
    return (
      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
        {localCart.map(product => 
          <CartItem key={product.id} product={product} />
        )}
      </ul>
    );
  }, [localCart]);

  const cleanUpCart = useCallback(() => {
    setLocalCart(prevCart => {
      return prevCart.filter(cartProduct => cartProduct.quantity);
    });
  }, [setLocalCart]);

  useEffect(() => {
    return () => {
      cleanUpCart();
    }
  }, [cleanUpCart]);

  return (
    <div>
      {localCart.length ? renderCartProducts() : <Placeholder message={config.NO_PRODUCTS_IN_CART} />}
      <LinkButton to={config.HOME_ROUTE}>Go to products</LinkButton>
    </div>
  );
}

export default Cart;