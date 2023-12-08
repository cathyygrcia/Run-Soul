import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

type Props = {
  onSearch: (text: string) => void;
  cartQuantity: number;
};

export default function Header({ onSearch, cartQuantity }: Props) {
  return (
    <>
      <nav className="nav">
        <ul className="ul">
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
              <h1 className="text-lg md:text-2xl lg:text-5xl text-black">
                Run
              </h1>
            </div>
            <div className="">
              <h1 className="text-lg md:text-2xl lg:text-5xl pl-20 text-black">
                Soul
              </h1>
            </div>
          </Link>
        </div>
        <div className="flex">
          <div>
            <SearchBar onChange={onSearch} />
          </div>
          <div className="ml-9">
            <Link to="/cart">
              <div className="shop">
                <FontAwesomeIcon icon={faCartShopping} size="2x" />
                {cartQuantity > 0 && (
                  <div className="circle">
                    <p>{cartQuantity}</p>
                  </div>
                )}
              </div>
            </Link>
          </div>
        </div>
      </nav>{' '}
      <Outlet />
    </>
  );
}
type SearchProps = {
  onChange: (value: string) => void;
};

function SearchBar({ onChange }: SearchProps) {
  return (
    <>
      <input
        className="search-bar"
        type="text"
        placeholder="search "
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </>
  );
}
