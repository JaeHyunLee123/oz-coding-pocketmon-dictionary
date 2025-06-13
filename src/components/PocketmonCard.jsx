/**
 * @typedef {Object} PocketmonCardProps
 * @property {import("../type").PocketmonData} pocketmon
 */

import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../RTK/favoriteSlice";
import Heart from "./Heart";
import { Link } from "react-router";
import { memo, useState } from "react";

/**
 * @param {PocketmonCardProps} props
 */
function PocketmonCardComponent({ pocketmon }) {
  const [isImageLoading, setIsImageLoading] = useState(true);

  /** @type {Array<number>} */
  const favorites = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  return (
    <section
      className="flex flex-col justify-center items-center"
      key={pocketmon.id}
    >
      <Link to={`/detail/${pocketmon.id}`}>
        <img
          src={pocketmon.frontImage}
          alt={`${pocketmon.name}-image`}
          onLoad={() => {
            setIsImageLoading(false);
          }}
        />

        {isImageLoading ? <span className="text-xl">이미지 로딩중</span> : null}
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
    </section>
  );
}

const PocketmonCard = memo(PocketmonCardComponent);

export default PocketmonCard;
