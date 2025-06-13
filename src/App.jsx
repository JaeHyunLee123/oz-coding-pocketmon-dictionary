import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPocketmonsThunk } from "./RTK/pocketmonSlice";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Loading from "./components/Loading";

const Home = lazy(() => import("./page/Home"));
const Detail = lazy(() => import("./page/Detail"));
const Favorites = lazy(() => import("./page/Favorites"));
const Search = lazy(() => import("./page/Search"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPocketmonsThunk(151));
  }, [dispatch]);

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center w-full h-full">
          <Loading />
        </div>
      }
    >
      <Routes>
        <Route element={<Layout />}>
          {" "}
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
