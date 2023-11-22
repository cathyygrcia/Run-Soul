import { Link, Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <nav className="bg-goldish p-8 columns-3">
        <ul className="flex gap-3">
          <li>
            <Link to="mens">Mens</Link>
          </li>
          <li>
            <Link to="womens">Womens</Link>
          </li>
          <li>
            <Link to="kids">Kids</Link>
          </li>
        </ul>
        <h1>Run Soul</h1>
        <input type="text" placeholder="search"></input>
      </nav>{' '}
      <Outlet />
    </div>
  );
}
