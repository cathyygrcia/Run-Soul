export default function Header() {
  return (
    <div>
      <nav className="bg-goldish p-8 columns-3">
        <ul className="flex gap-3">
          <li>Mens</li>
          <li>Womens</li>
          <li>Kids</li>
        </ul>
        <h1>Run Soul</h1>
        <input type="text" placeholder="search"></input>
      </nav>
    </div>
  );
}
