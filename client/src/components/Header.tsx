import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

type Props = {
  onSearch: (text: string) => void;
};

export default function Header({ onSearch }: Props) {
  return (
    <>
      <div>
        <nav className="flex bg-goldish p-8 space-x-24 justify-between items-center">
          <ul className="flex gap-3 text-xl">
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHouse} />
              </Link>
            </li>
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
          <div>
            <Link to="/">
              <div>
                <h1 className="text-5xl text-black">Run</h1>
              </div>
              <div className="">
                <h1 className="text-5xl pl-20 text-black">Soul</h1>
              </div>
            </Link>
          </div>
          <div className="flex">
            <div>
              <SearchBar onChange={onSearch} />
            </div>
            <div className="ml-9">
              <FontAwesomeIcon icon={faCartShopping} size="2x" />
            </div>
          </div>
        </nav>{' '}
        <Outlet />
      </div>
    </>
  );
}
type SearchProps = {
  onChange: (value: string) => void;
};

function SearchBar({ onChange }: SearchProps) {
  return (
    <input
      className="search"
      type="text"
      placeholder="search"
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
}
