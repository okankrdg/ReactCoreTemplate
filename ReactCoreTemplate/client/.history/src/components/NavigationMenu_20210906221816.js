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
          <button className="nav-link link-dark">
            <Icon.App /> Home
          </button>
        </li>
        <li>
          <button className="nav-link link-dark">
            <Icon.Dash /> Dashboard
          </button>
        </li>
        <li>
          <button className="nav-link link-dark">
            <Icon.Table /> Orders
          </button>
        </li>
        <li>
          <button className="nav-link link-dark">
            <Icon.Terminal /> Products
          </button>
        </li>
        <li>
          <button className="nav-link link-dark">
            <Icon.Alarm /> Customers
          </button>
        </li>
      </ul>
    </div>
  );
};
export default NavigationMenu;
