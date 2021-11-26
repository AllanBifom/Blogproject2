import Footer from "./footer/Footer"
import NavBar from "./Navbar"
import 'bootstrap/dist/css/bootstrap.css';
import {Row, Col, Container, Image} from 'react-bootstrap'
import oldguysmiling from "./Images/oldguysmilling.jpeg"
import handheart from "./Images/handheart.jpeg"
import jealousy from "./Images/jealousy.jpeg"


function About(){
    return(
        <div>
        <div Container>
            <div>
            <NavBar />
            </div>
            <div style={{marginTop:"auto",marginBottom:"auto"}}>
            </div>

            <div Container style={{marginTop:"auto",marginBottom:"auto"}}>
            <Container>
  <Row>
    <Col sm={8}><p className="h1" style={{color:"aliceblue",fontFamily:"serif"}}> 
    Our mission is to connect around the world through Strength in community and Faith.
    We offer therapeutical counceling and advice through a virtual platform for all our customers.
    </p>
    </Col>
    <Col sm={4}><Image src={oldguysmiling} roundedCircle fluid/></Col>
  </Row>
  <Row>
      <Col><br/><br/></Col>
    </Row>
  <Row>
    <Col sm><iframe width="100%" height="100%" src="https://www.youtube.com/embed/Yw92wnm1IZ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
    <Col sm><iframe width="100%" height="100%" src="https://www.youtube.com/embed/eE6Rt-bFkvw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
    <Col sm><iframe width="100%" height="100%" src="https://www.youtube.com/embed/-uBalgyUoLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
  </Row>
  <Row>
    <Col sm={8}><p className="h1" style={{color:"aliceblue",fontFamily:"serif"}}>We Offer group meetings with our Staff on a daily basis on 
    Topics which draw attention in Our world Today.
     </p></Col>
  </Row>
  <Row>
    <Col sm><a href="https://www.racialhealthequity.org/blog"><Image src={handheart} thumbnail fluid/></a></Col>
    <Col sm><a href = "https://blog.heartmanity.com/how-to-understand-and-overcome-jealousy"><Image src={jealousy}/></a></Col>
    <Col sm><iframe width="100%" height="100%" src="https://www.youtube.com/embed/HnrogLw6SOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
    
  </Row>
</Container>
            </div>

            <div style={{marginTop:"auto"}}>
            
            </div>
        </div>
        <Footer />
        </div>

    )
}
export default About