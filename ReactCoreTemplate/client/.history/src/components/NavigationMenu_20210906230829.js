import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const NavigationMenu = () => {
  return (
    <div className="d-flex flex-column p-3 bg-light col-md-2">
      <a
        href="/"
        className="d-flex align-items-center mb-1 ml-1 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <span className="fs-4">Sidebar</span>
      </a>
      <hr></hr>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className="text-decoration-none">
            <button className="nav-link link-dark">
              <Icon.HouseDoor /> Home
            </button>
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="text-decoration-none">
            <button className="nav-link link-dark">
              <Icon.Speedometer /> Dashboard
            </button>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-decoration-none">
            <button className="nav-link link-dark">
              <Icon.TelephoneFill /> İletişim
            </button>
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-decoration-none">
            <button className="nav-link link-dark">
              <Icon.FilePersonFill /> Hakkında
            </button>
          </Link>
        </li>
        <li>
          <Link to="/" className="text-decoration-none">
            <button className="nav-link link-dark">
              <Icon.Alarm /> Customers
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default NavigationMenu;
