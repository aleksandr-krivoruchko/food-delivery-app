import burger from '../img/kc_chimichurri.png';

export function CartProduct({ id, title }) {
  return (
    <li className="product" key={title}>
      <img src={burger} alt="product-img" width={200} />
      <h2>Product</h2>
      <p>price: 100$</p>
    </li>
  );
}
