import { useState, useEffect } from 'react';
import * as moviesAPI from '../services/moviesAPI';
import { ShopsList } from '../components/ShopsList';
import { ProductsList } from '../components/ProductsList';

export default function HomePage() {

  return (
    <div className="">
      <ShopsList />
      <ProductsList />
    </div>
  );
}
