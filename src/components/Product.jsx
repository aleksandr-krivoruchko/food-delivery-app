import burger from '../img/kc_chimichurri.png';

export function Product(item) {
      const {_id, name, images, price } = item.item;

  const handleClick = (e) => {
    console.log(e.target.parentNode);
  }

  return (
    <li className="product" key={_id} onClick={handleClick}>
      <img src={images[1]} alt={name} width={150} />
      <h2>{name}</h2>
      <p>{`${price}$`}</p>
      <button type="button" className="btn">
        add to cart
      </button>
    </li>
  );
}
