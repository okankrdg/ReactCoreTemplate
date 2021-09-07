import { Navbar, Container } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar className="mb-4 bg-white">
      <Container fluid>
        <Navbar.Brand href="#home">Bapsis V2</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Okan Can Karadağ</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
