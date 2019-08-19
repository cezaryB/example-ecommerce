import React, { useContext, useMemo, useCallback } from 'react';
import Store from '../../context/Store';

const ProductCard = ({ product }) => {
  const { localCart, setLocalCart } = useContext(Store);

  const productFoundInCart = useMemo(() => {
    return localCart.find(productInCart => productInCart.id === product.id);
  }, [localCart, product]);

  const addProductToCart = useCallback(() => {
    setLocalCart(prevCart => ([ ...prevCart, { ...product, quantity: 1 }]));
  }, [product, setLocalCart]);

  const removeProductFromCart = useCallback(() => {
    setLocalCart(prevCart => prevCart.filter(cartItem => cartItem.id !== product.id));
  }, [product, setLocalCart]);

  return (
    <div style={
      { 
        width: '30%', 
        flexBasis: '30%', 
        border: '1px solid gray',
        padding: '5px' 
      }
    }>
      <p>{product.name}</p>
      {
        productFoundInCart ?
          <button onClick={removeProductFromCart}>Remove from cart</button> :
          <button onClick={addProductToCart}>Add to cart</button>
      }
    </div>
  );
};

export default ProductCard;