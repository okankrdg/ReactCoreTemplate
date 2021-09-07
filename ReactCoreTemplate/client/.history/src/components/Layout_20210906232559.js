import Header from "./Header";
import NavigationMenu from "./NavigationMenu";
import "../dist/bootstrap/bootstrap.min.css";
const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="row py-3" style={{ backgroundColor: "#f8f9fa" }}>
        <Header />
        <div className="">
          <NavigationMenu />
        </div>
        {children}
      </div>
    </div>
  );
};
export default Layout;
