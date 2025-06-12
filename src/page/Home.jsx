import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import Heart from "../components/Heart";
import { toggleFavorite } from "../RTK/favoriteSlice";

export default function Home() {
  /** @type {import("../type").PocketmonStore} */
  const { isLoading, isError, pocketmons } = useSelector(
    (state) => state.pocketmon
  );

  /** @type {Array<number>} */
  const favorites = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  return (
    <div className="flex justify-center flex-wrap gap-5">
      {isLoading
        ? "Loading..."
        : isError
        ? "Error try again"
        : pocketmons.map((pocketmon) => (
            <div
              className="flex flex-col justify-center items-center"
              key={pocketmon.id}
            >
              <img src={pocketmon.frontImage} />
              <div className="flex justify-center items-center gap-2">
                <span>{pocketmon.name}</span>
                <button
                  onClick={() => {
                    dispatch(toggleFavorite(pocketmon.id));
                  }}
                >
                  <Heart
                    fill={favorites.includes(pocketmon.id) ? "red" : "none"}
                  />
                </button>
              </div>
            </div>
          ))}
    </div>
  );
}
