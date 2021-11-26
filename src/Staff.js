import Footer from "./footer/Footer"
import NavBar from "./Navbar"
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col, Image} from "react-bootstrap"
import AdminsFace from './Images/adminface.jpg'
import Axios from 'axios';
import { useState, useEffect } from "react";
import staffImage from './Images/IMG_3390.jpg'


function Staff(){
    
    const [staffList, setStaffList] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:3001/staff/all").then((response) => {
            setStaffList(response.data)
        });
        
    }, []);
    
    return(
        <div>
            <div Container>
            <NavBar />
            <Container>
    <Row>
    <Col sm={8}><h2 style={{color:"aliceblue",fontFamily:"serif"}}> Welcome To the staff Page.<br/>Meet the people guiding you through your journey to self betterment.</h2></Col>
    <Col sm={4}>
        <br/>
    <div style={{textAlign:"center",alignItems:"center",justifyContent:"center",boxShadow: '0 2px 5px #070300', borderRadius:'10px'}}>
        <h2 style={{color:"aliceblue",fontFamily:"serif"}}>Meet Your Admin</h2>
    <Image src={AdminsFace} roundedCircle fluid style={{height: '150px', width: '150px'}}/>
    <h4 style={{color:"aliceblue",fontFamily:"serif"}}>
        Name: Allan Bifom<br/>
        Email: a.bifom2@gmail.com<br/>
        Admin Head
    </h4>

    </div>

    </Col>
    </Row>
    <Row>
    <Col sm><h2 style={{color:"aliceblue",fontFamily:"serif"}}>Meet Your Staff:</h2>
    <br/>
            <div>
                {staffList.map((val) => {
                    return(
                        <div style={{textAlign:"center",alignItems:"center",justifyContent:"center",boxShadow: '0 2px 5px #070300', borderRadius:'10px'}}>
                        <Image src={staffImage} roundedCircle fluid style={{height: '150px', width: '150px'}}/>
                        <br/>
                        <h3 style={{color:"aliceblue",fontFamily:"serif"}}>Firstname: {val.Firstname} </h3>
                        <br/>
                        <h3 style={{color:"aliceblue",fontFamily:"serif"}}>Lastname: {val.Lastname} </h3>
                        <br/>
                        <h3 style={{color:"aliceblue",fontFamily:"serif"}}>Email: {val.Email} </h3>
                        </div>
                    )
                })}

            </div>
            </Col>
    </Row>
</Container>

            </div>
        <Footer />
        </div>
    )

}
export default Staff