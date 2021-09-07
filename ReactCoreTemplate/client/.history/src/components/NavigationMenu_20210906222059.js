import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const NavigationMenu = () => {
  return (
    <div className="d-flex flex-column p-3 bg-light col-md-2">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <span className="fs-4">Sidebar</span>
      </a>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link></Link>
          <button className="nav-link link-dark">
            <Icon.Square /> Home
          </button>
        </li>
        <li>
          <button className="nav-link link-dark">
            <Icon.Telephone /> Dashboard
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
