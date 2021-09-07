﻿import Header from "./Header";
import NavigationMenu from "./NavigationMenu";
import "../dist/bootstrap/bootstrap.min.css";
const Layout = ({ children }) => {
  return (
    <div className="row" style={{ backgroundColor: "#f8f9fa" }}>
      <Header />
      <NavigationMenu />
      {children}
    </div>
  );
};
export default Layout;
