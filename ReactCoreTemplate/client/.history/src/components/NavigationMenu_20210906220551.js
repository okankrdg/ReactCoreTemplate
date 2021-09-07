import { Nav } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
const NavigationMenu = () => {
  return (
    <div className="col-md-3 col-xl-2 p-3 bg-light">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <span className="fs-4">Menü</span>
        <hr />
      </a>
      <Nav className="nav-pills flex-column">
        <Nav.Item>
          <Nav.Link className="link-dark">
            <Icon.Alarm /> Okan
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="link-dark">
            <Icon.Alarm /> Okan
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
export default NavigationMenu;
