import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Store from './context/Store';
import config from './config/config';
import storageHelper from './helpers/storageHelper';
import useFetch from './hooks/useFetch';
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart';
import Error from './components/Error/Error';

const cartStorage = storageHelper(config.CART_STORAGE_KEY);

function App() {
  const { data: products, error: productsError } = useFetch(config.PRODUCTS_ENDPOINT);
  const [ localCart, setLocalCart ] = useState(cartStorage.get() || []);
  
  const renderContent = useCallback(() => {
    return [
      <Route key='1' path={config.HOME_ROUTE} exact component={Products} />, 
      <Route key='2' path={config.CART_ROUTE} component={Cart} />
    ]
  }, []);

  const renderError = useCallback(() => {
    return <Error message={productsError} />;
  }, [productsError]);

  useEffect(() => {
    cartStorage.set(localCart);
  }, [localCart]);

  return (
    <Store.Provider value={{ products, localCart, setLocalCart }}>
      <Router>
        {productsError ? renderError(): renderContent()}
      </Router>
    </Store.Provider>
  );
}

export default App;
