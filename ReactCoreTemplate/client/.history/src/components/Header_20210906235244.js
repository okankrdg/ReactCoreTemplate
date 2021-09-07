import { Navbar, Container } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar className="mb-4 bg-white shadow-sm mx-2">
      <Container fluid>
        <Navbar.Brand href="#home">Bapsis V2</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Okan Can Karadağ</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
