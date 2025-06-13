import { Outlet } from "react-router";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="bg-neutral-400 min-h-screen p-8">
        <Outlet />
      </div>
    </>
  );
}
