import { useState, useEffect } from 'react';
import * as moviesAPI from '../services/moviesAPI';
import { ShopsList } from '../components/ShopsList';
import { ProductsList } from '../components/ProductsList';

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState(null);

  useEffect(() => {
    moviesAPI
      .getTrending()
      .then(response => setTrendMovies(response.data.results));
  }, []);

  return (
    <div className="">
      <ShopsList />
      <ProductsList />
    </div>
  );
}
