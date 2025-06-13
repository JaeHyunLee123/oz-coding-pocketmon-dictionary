import { Link, useNavigate } from "react-router";
import MagnifyingGlass from "./MagnifyingGlass";
import Loading from "./Loading";

export default function Header() {
  const navigate = useNavigate();

  const onSearchInputChange = (event) => {
    const searchTerm = event.target.value;

    navigate(`search?query=${searchTerm}`);
  };

  return (
    <header className="flex flex-col">
      <div className="h-12 bg-[#ff0000]" />
      <div className="flex justify-center items-center bg-black p-2">
        <h1 className="text-center text-white text-4xl">포켓몬 도감</h1>
      </div>
      <div className="flex justify-center items-center p-2 gap-2">
        <Link to="/">메인페이지</Link>
        <Link to="/favorites">찜목록</Link>
        <div className="flex justify-center items-center gap-1">
          <label htmlFor="search">
            <MagnifyingGlass />
          </label>
          <input
            id="search"
            onChange={onSearchInputChange}
            className="border-b border-b-black focus: outline-0"
          />
        </div>
      </div>
    </header>
  );
}
