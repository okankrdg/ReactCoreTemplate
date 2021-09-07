import Header from "./Header";
import NavigationMenu from "./NavigationMenu";
import "../dist/bootstrap/bootstrap.min.css";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <NavigationMenu />
      <div>{children}</div>
    </div>
  );
};
export default Layout;
