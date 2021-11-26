import React, {useState} from 'react';
import './App.css';
import {Button, Form, Stack, Col, Container, Row} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';


function StaffSignUp(){
    let Navigate = useNavigate();
    const goLogin = () =>{
    Navigate(-1)
    }
    const staffregister = () =>{
        if(confirmpassword !== password){
            setregisterstate("Passwords do no match")
        }
        else{
        Axios.post('http://localhost:3001/staffregister', {
            firstname: firstname,
            lastname: lastname,
            username: username, 
            password: password,
            email: email}).then((response)=> {
                console.log(response)
            })
            Navigate("/Admin")
        }

    }
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('')
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('')
    const [registerstate, setregisterstate] = useState('')
    return(
        <div>
            <Container>
                <h1 className="shadow-sm text-info mt-5 p-3 text-center rounded">Staff Registration Page</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label style={{color: "white"}}>Enter Firstname</Form.Label>
                                <Form.Control type="username" placeholder="Enter FirstName" onChange={(e)=> {setfirstname(e.target.value)}} />
                                <Form.Text className="text-muted">
                                    please enter first name
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label style={{color: "white"}}>Enter Lastname</Form.Label>
                                <Form.Control type="username" placeholder="Enter FirstName" onChange={(e)=> {setlastname(e.target.value)}}/>
                                <Form.Text className="text-muted">
                                    please enter last name
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label style={{color: "white"}}>Enter Email</Form.Label>
                                <Form.Control type="username" placeholder="Enter email" onChange={(e)=> {setemail(e.target.value)}}/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicUserName">
                                <Form.Label style={{color: "white"}}>Username</Form.Label>
                                <Form.Control type="username" placeholder="Enter username" onChange={(e)=> {setusername(e.target.value)}}/>
                                <Form.Text className="text-muted">
                        
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label style={{color: "white"}}>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e)=> {setpassword(e.target.value)}} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label style={{color: "white"}}>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e)=> {setconfirmpassword(e.target.value)}}/>
                            </Form.Group>
                            
                            <Button variant="info" size="lg" onClick={staffregister}>
                                submit
                            </Button>
                            <br/>
                            <Form.Text className="text-muted">{registerstate}</Form.Text>
                            <br/>
                        </Form>
                    </Col>
            
                </Row>

                <Stack gap={2} className="col-md-5 mx-auto">
                <Button variant="outline-secondary" onClick={goLogin}>&lt; Back</Button>
                </Stack>
            </Container>


        </div>
    )

}
export default StaffSignUp