import { NavLink } from 'react-router-dom';

export function Navigation() {
  return (
    <header className="header">
      <nav className="nav wrapper">
        <NavLink to="/" className="link">
          Shop
        </NavLink>

        <NavLink to="/movies" className="link">
          Shopping Cart
        </NavLink>
      </nav>
    </header>
  );
}
