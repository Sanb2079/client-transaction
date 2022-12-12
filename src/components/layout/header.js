import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
// import UserSchema from "../../../../api-transaction/models/user/UserSchema";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  // const [user, setUser] = useState({});
  // useEffect(() => {
  //   // const dtuser = sessionStorage.getItem("user");
  //   // user = JSON.parse(dtuser);
  //   const user = JSON.parse(sessionStorage.getItem("user"));
  //   // console.log(user);
  //   setUser(user);
  // }, []);
  const navigate = useNavigate();
  const handleOnLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/register");
  };
  const [user, setuser] = useState({});
  useEffect(() => {
    // const user = JSON.parse(sessionStorage.getItem("user"));
    const dtuser = sessionStorage.getItem("user");
    console.log(dtuser);
    //const user = JSON.parse(dtuser);
    const user = JSON.parse(dtuser);

    setuser(user);
  }, []);
  const handleOnLogOut = () => {
    sessionStorage.removeItem("user");
  };
  return (
    <Navbar bg="primary" text="light" expand="md" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <div className="nav-link fw-bolder text-warning">
                  welcome back{user?.name}
                </div>
                <Link to="#" className="nav-link" onClick={handleOnLogOut}>
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="nav-link">
                  Login
                </Link>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </>
            )}

            {/* <Link to="/" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link> */}
            {/* <Link to="#" className="nav-link">
              Logout
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

//export default header;
