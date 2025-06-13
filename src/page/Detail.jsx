import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { toggleFavorite } from "../RTK/favoriteSlice";
import Heart from "../components/Heart";
import Loading from "../components/Loading";

export default function Detail() {
  const [pocketmon, setPocketmon] = useState();
  const [isFront, setIsFront] = useState(true);

  const { id } = useParams();

  /** @type {import("../type").PocketmonStore} */
  const { isLoading, isError, pocketmons } = useSelector(
    (state) => state.pocketmon
  );

  useEffect(() => {
    setPocketmon(pocketmons.find((el) => el.id === Number(id)));
  }, [id, pocketmons]);

  /** @type {Array<number>} */
  const favorites = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        "Error try again"
      ) : pocketmon ? (
        <div className="flex flex-col justify-center items-center">
          <button
            onClick={() => {
              setIsFront(!isFront);
            }}
            className="hover:cursor-pointer"
          >
            <img src={isFront ? pocketmon.frontImage : pocketmon.backImage} />
          </button>
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
          <p>{pocketmon.description}</p>
        </div>
      ) : null}
    </div>
  );
}
