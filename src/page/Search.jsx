import { getRegExp } from "korean-regexp";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import PocketmonCard from "../components/PocketmonCard";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

export default function Search() {
  const searchParam = useSearchParams()[0].get("query");

  const [searchingPocketmon, setSearchingPocketmon] = useState([]);

  const regex = useMemo(
    () =>
      getRegExp(searchParam, {
        initialSearch: true,
        startsWith: true,
        endsWith: false,
        ignoreSpace: true,
        ignoreCase: true,
        global: true,
      }),
    [searchParam]
  );

  /** @type {import("../type").PocketmonStore} */
  const { isLoading, isError, pocketmons } = useSelector(
    (state) => state.pocketmon
  );

  useEffect(() => {
    const temp = pocketmons.filter((pocketmon) => regex.test(pocketmon.name));
    setSearchingPocketmon(temp);
  }, [pocketmons, regex, setSearchingPocketmon]);

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-5">
        {isLoading ? (
          <Loading />
        ) : isError ? (
          "Error try again"
        ) : searchingPocketmon.length > 0 ? (
          searchingPocketmon.map((pocketmon) => (
            <PocketmonCard pocketmon={pocketmon} key={pocketmon.id} />
          ))
        ) : (
          "검색어에 매칭되는 포켓몬이 없습니다."
        )}
      </div>
    </div>
  );
}
