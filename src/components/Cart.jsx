import { CartProduct } from './CartProduct';

export function Cart(params) {
  return (
    <ul>
      <li>
        <CartProduct />
      </li>
      <li>
        <CartProduct />
      </li>
    </ul>
  );
}
