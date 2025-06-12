import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPocketmonsThunk } from "./RTK/pocketmonSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPocketmonsThunk(50));
  }, [dispatch]);

  return <></>;
}

export default App;
