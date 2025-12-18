import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <Header />

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
