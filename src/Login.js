import React, {Component, useState} from 'react';
import './App.css';
import {Button, Form, FormGroup, Stack, Input, Col, Container, Row} from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios';

function Login(){
    let Navigate = useNavigate();
    const goSignUp = () =>{
    Navigate("/SignUp")
    }
    const login = () => {
        Axios.post('http://localhost:3001/login', {
            username: username, 
            password: password}).then((response) => {
            if (response.data.message) {
                setloginstatus(response.data.message)
            }
            else{
                Navigate("/DashBoard")
            }
            })
            
    }
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const [loginstatus, setloginstatus] = useState('');
    return(
        <div>
            <Container>
                <h1 className="shadow-sm text-info mt-5 p-3 text-center rounded">User SignIn</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label style={{color: "white"}}>Username</Form.Label>
                                <Form.Control type="username" placeholder="Enter email" onChange={(e)=> {setusername(e.target.value)}}/>
                                <Form.Text className="text-muted">
                                We'll never share your userName with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label style={{color: "white"}}>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e)=> {setpassword(e.target.value)}}/>
                            </Form.Group>
                            
                            <Button variant="info" size="lg" type="submit"  onClick={(e) =>{e.preventDefault();login()}}>
                                Login
                            </Button>
                            <br/>
                            <Form.Text className="text-muted">Are you a staff? <NavLink activeClassName="active" to="/StaffLogin">StaffLogin</NavLink></Form.Text>
                            <br/>
                            <Form.Text>{loginstatus}</Form.Text>
                        </Form>
                    </Col>
            
                </Row>

                <Stack gap={2} className="col-md-5 mx-auto">
                <p style={{color: "grey"}}>Dont have an account?</p>
                <Button variant="outline-secondary" onClick={goSignUp}>SignUp</Button>
                </Stack>
            </Container>


        </div>
    )

}
export default Login;