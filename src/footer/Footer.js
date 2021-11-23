import React from "react";
import '../App.css'
import styled from "styled-components";
import {  } from "react-bootstrap";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
    const MDBFooter = styled.footer`
    ul li a {
        color: var(--mainGrey)
    }
    h5 {
        color: var(--mainGrey)
    }
    h5 a:hover {
        color: var(--mainLightGrey)
    }

    ul li a:hover {
        color: var(--mainLightGrey)
    }
    `
    return (
    <MDBFooter style={{color: "White",bottom:"0",position:"relative", marginTop:"auto",width:"100%", backgroundColor:"#343a40",opacity:"0.9"}} className="container-fluid bg-dark text-light mt-3 p-3">
        <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
            <MDBCol md="4">
            <h5 className="title" style={{fontFamily:"Farah"}}>Allan's healing foundation</h5>
            <h6>
                Be the best you, you can be.
            </h6>
            </MDBCol>
            <MDBCol md="2">
                <h5 className="title">Contact Us</h5>
                <ul className="list-unstyled">
                    <li>aeb672@mail.usask.ca</li>
                    <li>a.bifom2@gmail.com</li>
                    <li>a.bifom3@gmail.com</li>
                </ul>

        </MDBCol>
            <MDBCol md="2">
            <h5 className="title">Social Media</h5>
            <ul className="list-unstyled">
                <li >
                <a href="http://facebook.com/">FaceBook</a>
                </li>
                <li >
                <a href="http://instagram.com">Instagram</a>
                </li>
                <li >
                <a href="http://twitter.com">Twitter</a>
                </li>
            </ul>
            </MDBCol>
        </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Allan's Healing Foundation - All rights reserved 
        </MDBContainer>
        </div>
    </MDBFooter>
);
}

export default Footer;