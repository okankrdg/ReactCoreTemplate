import { Nav } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
const NavigationMenu = () => {
  return (
    <div className="d-flex flex-column  p-3 bg-light col-md-4">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <span className="fs-4">Sidebar</span>
      </a>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link link-dark">
            <Icon.Alarm />
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            <Icon.Alarm />
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            <Icon.Alarm />
            Orders
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            <Icon.Alarm />
            Products
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            <Icon.Alarm />
            Customers
          </a>
        </li>
      </ul>
    </div>
  );
};
export default NavigationMenu;
