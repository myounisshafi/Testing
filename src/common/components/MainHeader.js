import './MainHeader';
import '../css/MainHeader.css';
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import logo from '../../res/logo_maple.png';
const MainHeader = () => {
  return (
    <div className="header" class="w-200">
      <Navbar variant="dark" expand="lg" style={{backgroundColor: '#dd0000'}}>
        <Navbar.Brand href="#home" style={{fontSize: 30, fontWeight: 'bold'}}>
          Hotels
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto gap10">
            <Nav.Link href="#home/rooms-registered" class="nav-link">
              ROOMS REGISTERED - 100000
            </Nav.Link>
            <Nav.Link href="#home/rooms-available" class="nav-link">
              ROOMS AVAILABLE - 500
            </Nav.Link>

            <NavDropdown title="USD" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">USE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">CAD</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="English" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#register">Register</Nav.Link>
            <Button variant="outline-light" href="#home">
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <Navbar expand="lg">
        <Navbar.Brand
          href="#home"
          style={{
            marginLeft: 20,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <img
            class="siteIcon"
            src={logo}
            height={50}
            width={50}
            style={{objectFit: 'contain'}}
          />
        </Navbar.Brand>
        <strong class="headerTitle">HOTELS</strong>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto gapTest">
            <span class="navbar-text">ROOMS REGISTERED - %n</span>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline className="gapTest">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar> */}
    </div>
  );
};
export default MainHeader;
