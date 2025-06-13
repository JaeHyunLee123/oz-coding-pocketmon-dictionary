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
    <div className="flex justify-center">
      {isLoading ? (
        <Loading />
      ) : isError ? (
        "Error try again"
      ) : pocketmon ? (
        <div className="flex flex-col justify-center items-center p-10 w-96 space-y-4 bg-white rounded-2xl border-b-4 border-r-4">
          <div className="flex justify-center items-center ">
            <h1 className="text-3xl">{pocketmon.name}</h1>
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
          <p className="text-center">{pocketmon.description}</p>
          <div className="relative">
            <img
              src={pocketmon.frontImage}
              className={`absolute transform-3d backface-hidden transition-transform scale-150 ${
                isFront ? "rotate-y-0" : "rotate-y-180"
              }`}
            />
            <img
              src={pocketmon.backImage}
              className={`transform-3d backface-hidden transition-transform scale-150 ${
                isFront ? "rotate-y-180" : "rotate-y-0"
              }`}
            />
          </div>

          <button
            onClick={() => {
              setIsFront(!isFront);
            }}
            className="hover:cursor-pointer"
          >
            뒤집기
          </button>
        </div>
      ) : null}
    </div>
  );
}
