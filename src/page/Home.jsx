import { useSelector } from "react-redux";

import PocketmonCard from "../components/PocketmonCard";
import Loading from "../components/Loading";

export default function Home() {
  /** @type {import("../type").PocketmonStore} */
  const { isLoading, isError, pocketmons } = useSelector(
    (state) => state.pocketmon
  );

  return (
    <div className="flex justify-center flex-wrap gap-5">
      {isLoading ? (
        <Loading />
      ) : isError ? (
        "Error try again"
      ) : (
        pocketmons.map((pocketmon) => (
          <PocketmonCard key={pocketmon.id} pocketmon={pocketmon} />
        ))
      )}
    </div>
  );
}
