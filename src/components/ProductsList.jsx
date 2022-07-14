import { Product } from './Product';

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
  return (
    <ul className="products-list">
      {productsList.map(item => (
        <Product title={item} />
      ))}
    </ul>
  );
}
