import { Navbar, Container } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar className="mb-4 bg-white shadow-sm mx-3">
      <Container fluid>
        <Navbar.Brand href="/">Bapsis V2</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Okan Can Karadağ</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
