import Navbar from "../components/navbar";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
