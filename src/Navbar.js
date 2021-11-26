import { Nav, Navbar, Offcanvas, NavDropdown, Container} from 'react-bootstrap'
function NavBar(){
    return(
    <Navbar bg="info" expand={false} mb-5>
    <Container fluid mb-5>
    <Navbar.Brand href="/Dashboard" style={{fontFamily:"Farah",fontStyle:"italic", wordWrap:"wrap"}}>Allans Healing Foundation</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
        bg="info"
    >
        <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel" style={{fontFamily:"Farah",fontStyle:"italic"}}>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="/Dashboard">DashBoard</Nav.Link>
            <Nav.Link href="/Meetings">Meetings</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Staff">Staff</Nav.Link>
            <NavDropdown title="More..." id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="https://www.healthyplace.com/blogs/copingwithdepression" style={{fontFamily:"Farah",fontStyle:"italic"}}>Visit Healthyplace</NavDropdown.Item>
            <NavDropdown.Item href="https://www.depressedwhileblack.com/" style={{fontFamily:"Farah",fontStyle:"italic"}}>Visit Depressed while black</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/" style={{fontFamily:"Farah",fontStyle:"italic"}}>
            LogOut
            </NavDropdown.Item>
        </NavDropdown>
        </Nav>
        </Offcanvas.Body>
    </Navbar.Offcanvas>
    </Container>
</Navbar>
    )
}
export default NavBar