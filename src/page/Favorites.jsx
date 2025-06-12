import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PocketmonCard from "../components/PocketmonCard";

export default function Favorites() {
  const [favoritePocketmons, setFavoritePocketmons] = useState([]);

  /** @type {import("../type").PocketmonStore} */
  const { isLoading, isError, pocketmons } = useSelector(
    (state) => state.pocketmon
  );

  /** @type {Array<number>} */
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    const tempFavoritePocketmons = pocketmons.filter((pocketmon) =>
      favorites.includes(pocketmon.id)
    );

    setFavoritePocketmons(tempFavoritePocketmons);
  }, [favorites, pocketmons]);

  return (
    <div className="flex justify-center flex-wrap gap-5">
      {isLoading
        ? "Loading..."
        : isError
        ? "Error try again"
        : favoritePocketmons.map((pocketmon) => (
            <PocketmonCard pocketmon={pocketmon} key={pocketmon.id} />
          ))}
    </div>
  );
}
