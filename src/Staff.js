import Footer from "./footer/Footer"
import NavBar from "./Navbar"
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from "react-bootstrap"
function Staff(){
    return(
        <div>
            <div Container>
            <NavBar />
            <Container>
    <Row>
    <Col sm={8}>sm=8</Col>
    <Col sm={4}>sm=4</Col>
    </Row>
    <Row>
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
    </Row>
</Container>

            </div>
        <Footer />
        </div>
    )

}
export default Staff