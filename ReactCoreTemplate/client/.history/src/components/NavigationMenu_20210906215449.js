import { Nav } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
const NavigationMenu = () => {
  return (
    <div className="col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
      <Nav className="nav-pills flex-column mb-auto">
        <Nav.Item>
          <Nav.Link className="text-decoration-none">
            <Icon.Alarm /> Okan
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Icon.Alarm />
            Okan
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
export default NavigationMenu;
