import Header from "./Header";
import NavigationMenu from "./NavigationMenu";
import "../dist/bootstrap/bootstrap.min.css";
const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row py-3" style={{ backgroundColor: "#f8f9fa" }}>
        <Header />
        <div className="col-3">
          <div className="sticky-top">
            <NavigationMenu />
          </div>
        </div>
        <div className="col bg-white shadow">{children}</div>
      </div>
    </div>
  );
};
export default Layout;
