import { Link, Outlet } from 'react-router-dom';

type Props = {
  onSearch: (text: string) => void;
};

// function Searches({searchText}: Props){

// const searchedItem = searchOptions.filter((searchOptions) =>
//   searchOptions.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
// );
// const brands = searchedItem.map((searchOptions, index) => <li key={index}>{searchOptions}</li>);
// const message = <li>No items match the filter.</li>;
// return (
//   <div className="wrapper">
//     <SearchBar searchText={searchText} onChange={setSearchText} />
//     <ul>{searchedItem.length > 0 ? brands : message}</ul>
//   </div>
// );
// }

export default function Header({ onSearch }: Props) {
  return (
    <div>
      <nav className="bg-goldish p-8 columns-3 ">
        <ul className="flex gap-3 text-xl">
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
        <h1 className="text-3xl">Run Soul</h1>
        <SearchBar onChange={onSearch} />
      </nav>{' '}
      <Outlet />
    </div>
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
