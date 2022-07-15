import { Product } from './Product';
import { useState, useEffect } from 'react';

import * as moviesAPI from '../services/moviesAPI';

const productsList = [
  'burger',
  'ice-cream',
  'potato',
  'cola',
  'pizza',
  'soup',
  'burger',
  'ice-cream',
  'potato',
  'cola',
  'pizza',
  'soup',
];

export function ProductsList() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
        fetch('https://restaurent-database.herokuapp.com/addFood')
        .then(res => res.json())
          .then(data => {
            setFoods(data);
        })
        .catch(err => console.log(err))
    } ,[])


  return (
    <ul className="products-list">
      {foods.map(item => (
        <Product item={item} />
      ))}
    </ul>
  );
}
