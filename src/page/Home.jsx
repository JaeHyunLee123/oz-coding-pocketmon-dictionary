import { useSelector } from "react-redux";
import { Link } from "react-router";
import Heart from "../components/Heart";

export default function Home() {
  /** @type {import("../type").PocketmonStore} */
  const { isLoading, isError, pocketmons } = useSelector(
    (state) => state.pocketmon
  );

  return (
    <div className="flex justify-center flex-wrap gap-5">
      {isLoading
        ? "Loading..."
        : isError
        ? "Error try again"
        : pocketmons.map((pocketmon) => (
            <Link to={`/detail/${pocketmon.id}`} key={pocketmon.id}>
              <img src={pocketmon.frontImage} />
              <span>{pocketmon.name}</span>
              <Heart />
            </Link>
          ))}
    </div>
  );
}
