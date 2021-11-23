import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import {Row, Col, Container, Carousel, Stack} from 'react-bootstrap'
import oldGuy from "./Images/oldguysmilling.jpeg"
import happyFamily from './Images/happyFamily.jpeg'
import HappyHeart from "./Images/Happy-Heart.jpeg"
import { NavLink, useNavigate } from 'react-router-dom';


function App() {
  let Navigate = useNavigate();
  const goLogin = () => {
    Navigate("/Login")
  }
  const goSignUp = () =>{
    Navigate("/SignUp")
  }
  return (
    <div >
      <div >
        <div Container>
          <div style={{textAlign: "center"}}>
      <h2 style={{fontFamily: "Farah", color: "aliceblue"}}>
        Welcome to AHF(Allans Healing foundation)
      </h2>
      </div>
    <div style={{marginTop: "auto", marginBottom:"auto"}}>
    <Carousel>
    <Carousel.Item >
    <div>
    <img
      className="d-block w-100 h-25"
      src={happyFamily}
      alt="First slide"
    />
    </div>
    <Carousel.Caption>
      <h3>Come Together</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <div>
    <img
      
      className="d-block w-100 h-25"
      src={happyFamily}
      alt="Second slide"
    />
    </div>

    <Carousel.Caption>
      <h3>Be a Family</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <div>
    <img
      className="d-block w-100 h-25"
      src={happyFamily}
      alt="Third slide"
    />
    </div>

    <Carousel.Caption>
      <h3>Happy ending</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
<br/>
<h2 style={{fontFamily:"Farah", textAlign:"center",color:"aliceblue"}}>Get started</h2>
<Stack gap={2} className="col-md-5 mx-auto">
  <Button variant="secondary" onClick={goLogin}>login</Button>
  <Button variant="outline-secondary"onClick={goSignUp}>SignUp</Button>
</Stack>
        
      
  
        
        </div>
      </div>
    </div>
  );
}

export default App;
