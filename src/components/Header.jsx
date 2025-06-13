import { Link, useNavigate } from "react-router";
import MagnifyingGlass from "./MagnifyingGlass";

export default function Header() {
  const navigate = useNavigate();

  const onSearchInputChange = (event) => {
    const searchTerm = event.target.value;

    navigate(`search?qeury=${searchTerm}`);
  };

  return (
    <header className="p-10 flex justify-center items-center gap-2">
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorite</Link>
      <div className="flex justify-center items-center gap-2">
        <label htmlFor="search">
          <MagnifyingGlass />
        </label>
        <input
          id="search"
          onChange={onSearchInputChange}
          className="border border-black"
        />
      </div>
    </header>
  );
}
