import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const NavigationMenu = () => {
  return (
    <div className="d-flex flex-column p-3 bg-white mx-2 vh-100">
      <a
        href="/"
        className="d-flex align-items-center mx-2 link-dark text-decoration-none"
      >
        <span className="fs-4">Menü</span>
      </a>
      <hr></hr>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className="text-decoration-none">
            <button className="nav-link link-dark">
              <Icon.HouseDoor style={{ verticalAlign: "-.125em" }} /> Ana Sayfa
            </button>
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="text-decoration-none">
            <button className="nav-link link-dark">
              <Icon.Speedometer style={{ verticalAlign: "-.125em" }} />{" "}
              Dashboard
            </button>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-decoration-none">
            <button className="nav-link link-dark">
              <Icon.TelephoneFill style={{ verticalAlign: "-.125em" }} />{" "}
              İletişim
            </button>
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-decoration-none">
            <button className="nav-link link-dark">
              <Icon.FilePersonFill style={{ verticalAlign: "-.125em" }} />{" "}
              Hakkında
            </button>
          </Link>
        </li>
        <li>
          <Link to="/projecttypes" className="text-decoration-none">
            <button className="nav-link link-dark">
              <Icon.Alarm style={{ verticalAlign: "-.125em" }} /> Proje Türleri
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default NavigationMenu;
