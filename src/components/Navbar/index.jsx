import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { getProfile, logout } from "../../redux/actions/auth";

const NavbarComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, token } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getProfile(null, null, null));
    }, [dispatch, token]);

    return (
        <Navbar expand="lg" style={{ backgroundColor: "#0F1035"}}>
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ color: "#EEF7FF" }}>
                    Kampus Merdeka
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" style={{ color: "#EEF7FF" }}>
                            Home
                        </Nav.Link>
                        {user ? (
                            <>
                                {(user?.role === "admin" || user?.role === "superadmin") && (
                                    <Nav.Link as={Link} to="/cars" style={{ color: "#EEF7FF" }}>
                                        Add Car
                                    </Nav.Link>
                                )}
                                {(user?.role === "admin" || user?.role === "superadmin") && (
                                    <Nav.Link as={Link} to="/profile" style={{ color: "#EEF7FF" }}>
                                        {user?.name}
                                    </Nav.Link>
                                )}
                                <Nav.Link
                                    onClick={() => {
                                        dispatch(logout());
                                        navigate("/login");
                                    }}
                                    style={{ color: "#EEF7FF" }}
                                >
                                    Logout
                                </Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login" style={{ color: "#EEF7FF" }}>
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="/register" style={{ color: "#EEF7FF" }}>
                                    Register
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;