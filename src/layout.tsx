import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

const Layout = () => {
  return (
    <>
      <Nav />
      <div className="page-wrapper">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
