import { Outlet } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
