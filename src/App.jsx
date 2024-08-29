import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Users from "./Auth/Users";
import Home from "./Front/Home";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Footer from "./Front/Footer";
import Pricing from "./Front/Pricing";
import logo from "./assets/logo.bmp";

function App() {
  return (
    <Router>
      <Navbar
        expand={"lg"}
        className="bg-body-tertiary p-3 fw-semibold"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              alt=""
              style={{ mixBlendMode: "multiply" }}
              height={38}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Sarafi
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto">
                <NavDropdown
                  title="Product"
                  id="collapsible-nav-dropdown dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="/pricing">Pricing</Nav.Link>
              </Nav>
              <Nav>
                <a
                  href="/buy"
                  className="btn btn-warning px-sm-5 me-sm-3 mb-3 mb-sm-0"
                >
                  Buy Now
                </a>
                <Nav.Link eventKey={2} href="/login">
                  Login
                </Nav.Link>
              </Nav>{" "}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* <Title /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/buy" element={<Register />} />
          <Route path="/users" element={<Users />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
