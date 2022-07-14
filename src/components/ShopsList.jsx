const shopsList = ['McDonalds', 'KFC', 'Metro', 'ATB', 'Varus'];

export function ShopsList() {
  return (
    <ul className="shops-list">
      {shopsList.map(item => (
        <li>
          <button type="button" className="btn shop-btn">
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}
