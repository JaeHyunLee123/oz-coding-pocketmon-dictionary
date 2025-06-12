import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPocketmonsThunk } from "./RTK/pocketmonSlice";
import { Route, Routes } from "react-router";
import Home from "./page/Home";
import Detail from "./page/Detail";
import Favorites from "./page/Favorites";
import Search from "./page/Search";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPocketmonsThunk(151));
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/search" element={<Search />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;
