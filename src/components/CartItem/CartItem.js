import React, { useContext, useCallback } from 'react';
import Store from '../../context/Store';

const CartItem = ({ product }) => {
  const { localCart, setLocalCart } = useContext(Store);

  const updateItemInCart = useCallback((addQuantity) => { 
    const updatedCart = localCart.map(cartProduct => {     
      if (product.id === cartProduct.id) {
        const updatedQuantity = addQuantity ?
          cartProduct.quantity + 1 :
          cartProduct.quantity - 1;
          
        return { ...cartProduct, quantity: updatedQuantity >= 0 ? updatedQuantity : 0 };
      }    
      return cartProduct;
    });

    setLocalCart(updatedCart);
  }, [localCart, product, setLocalCart]);

  return (
    <li style={{ margin: '5px 0', padding: '5px' ,border: '1px solid gray' }}>
      <p>{product.name}</p>
      <p>Quantity: {product.quantity}</p>
      <button onClick={() => updateItemInCart(true)}>+</button>
      <button onClick={() => updateItemInCart(false)}>-</button>
    </li>
  );
};

export default CartItem;