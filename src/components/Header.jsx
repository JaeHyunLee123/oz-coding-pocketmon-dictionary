import { Link } from "react-router";

export default function Header() {
  return (
    <header className="p-10 flex justify-center items-center gap-2">
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorite</Link>
      <Link to="/search">Search</Link>
    </header>
  );
}
