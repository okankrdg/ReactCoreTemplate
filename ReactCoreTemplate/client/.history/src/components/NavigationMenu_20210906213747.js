import { Nav } from "react-bootstrap";
const NavigationMenu = () => {
  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
      <Nav className="col-md-4 d-none d-md-block bg-light sidebar">
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <svg className="bi me-2" width="16" height="16"></svg>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use xlink:href="#speedometer2"></use>
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use xlink:href="#table"></use>
              </svg>
              Orders
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16"></svg>
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use xlink:href="#people-circle"></use>
              </svg>
              Customers
            </a>
          </li>
        </ul>
      </Nav>
    </div>
  );
};
export default NavigationMenu;
