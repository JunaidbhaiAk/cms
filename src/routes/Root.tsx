import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <>
      <Sidebar />
      <section className="relative min-h-screen m-auto py-4 px-2 lg:w-[80%] z-[1]">
        <Outlet />
      </section>
    </>
  );
};

export default Root;
