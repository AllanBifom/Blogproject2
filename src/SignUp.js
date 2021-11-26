import React, {useState} from 'react';
import './App.css';
import {Button, Form, Stack, Col, Container, Row} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from "axios"


function SignUp(){
    let Navigate = useNavigate();
    const goLogin = () =>{
    Navigate("/Login")
    }
    const register = () => {
        if(confirmpassword !== password){
            setregisterstate("Passwords do no match")
            
        }
        else{
        Axios.post('http://localhost:3001/register', {
            username: username, 
            password: password}).then((response)=> {
                console.log(response)
            })
            Navigate("/Login")
        }
        
    }
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('')
    const [registerstate, setregisterstate] = useState('')
    return(
        <div>
            <Container>
                <h1 className="shadow-sm text-info mt-5 p-3 text-center rounded">User Registration Page</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                        
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
                            
                            <Button variant="info" size="lg" type="submit" onClick={(e) => {e.preventDefault();register()}}>
                                Enter
                            </Button>
                            <br/>
                    
                            <Form.Text>{registerstate}</Form.Text>
                        </Form>
                    </Col>
            
                </Row>

                <Stack gap={2} className="col-md-5 mx-auto">
                <p style={{color: "grey"}}>Already have an account?</p>
                <Button variant="outline-secondary" onClick={goLogin}>SignIn</Button>
                </Stack>
            </Container>


        </div>
    )

}
export default SignUp