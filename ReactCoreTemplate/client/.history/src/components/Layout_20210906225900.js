import Header from "./Header";
import NavigationMenu from "./NavigationMenu";
import "../dist/bootstrap/bootstrap.min.css";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <NavigationMenu />
      {children}
    </>
  );
};
export default Layout;
