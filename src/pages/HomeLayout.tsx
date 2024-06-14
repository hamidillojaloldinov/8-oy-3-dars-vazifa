import {  Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function HomeLayout() {
  return (
    <>
      <header>
        <div className="">
          <Navbar />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
      </footer>
    </>
  );
}

export default HomeLayout;
