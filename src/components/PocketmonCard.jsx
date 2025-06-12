/**
 * @typedef {Object} PocketmonCardProps
 * @property {import("../type").PocketmonData} pocketmon
 */

import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../RTK/favoriteSlice";
import Heart from "./Heart";
import { Link } from "react-router";

/**
 * @param {PocketmonCardProps} props
 */
export default function PocketmonCard({ pocketmon }) {
  /** @type {Array<number>} */
  const favorites = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  return (
    <div
      className="flex flex-col justify-center items-center"
      key={pocketmon.id}
    >
      <Link to={`/detail/${pocketmon.id}`}>
        <img src={pocketmon.frontImage} />
      </Link>

      <div className="flex justify-center items-center gap-2">
        <span>{pocketmon.name}</span>
        <button
          onClick={() => {
            dispatch(toggleFavorite(pocketmon.id));
          }}
        >
          <Heart
            fill={favorites.includes(pocketmon.id) ? "red" : "none"}
            className="hover:cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
}
