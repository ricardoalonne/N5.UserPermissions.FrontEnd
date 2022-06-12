import { Link } from "react-router-dom";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarToggler,
  UncontrolledDropdown,
} from "reactstrap";

const TitleBar = () => {
  return (
    <Navbar color="light" expand="md" light>
      <Link to="/" className="navbar-brand" style={{textDecoration: "none"}}>
          N5 User Permission
      </Link>
      <NavbarToggler onClick={function noRefCheck() {}} />
      <Collapse navbar>
        <Nav className="ms-auto" navbar>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              Ricardo Arbildo J.
            </DropdownToggle>
            <DropdownMenu className="user-context-menu">
              <DropdownItem
                href="https://github.com/reactstrap/reactstrap"
                target="_blank"
              >
                GitHub
              </DropdownItem>
              <DropdownItem
                href="https://www.linkedin.com/in/ricardoalonne/"
                target="_blank"
              >
                LinkedIn
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default TitleBar;
