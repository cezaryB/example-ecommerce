import { useState, useEffect } from 'react';
import config from '../config/config';
import productsData from '../data/products';

const useFetch = url => {
  const [ data, setData ] = useState([]);
  const [ error, setError ] = useState('');

  useEffect(() => {
    // I'm imitating here a get request
    // In a real world scenario I would catch all the errors and
    // save them inside state with setError
    setTimeout(() => {
      switch (url) {
        case 'products':
          setData(productsData);
          break;
        default:
          setError(config.DATA_ERROR);
      }
    }, 2000);
  }, []);

  return { data, error };
}

export default useFetch;