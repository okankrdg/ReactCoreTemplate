import { Nav, Button } from "react-bootstrap";
const NavigationMenu = () => {
  return (
    <Nav className="col-md-6 d-none d-md-block bg-light sidebar">
      <Nav.Item>
        <Nav.Link>Okan</Nav.Link>
        <Button variant="primary">Okan</Button>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Okan</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
export default NavigationMenu;
