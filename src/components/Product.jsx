import burger from '../img/kc_chimichurri.png';

export function Product({ id, title }) {
  return (
    <li className="product" key={title}>
      <img src={burger} alt="product-img" width={200} />
      <h2>{title}</h2>
      <button type="button" className="btn">
        add to cart
      </button>
    </li>
  );
}
