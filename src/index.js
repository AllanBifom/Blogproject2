import React from 'react';
import { render } from "react-dom";
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Login from './Login';
import SignUp from './SignUp';
import StaffLogin from './StaffLogin'
import StaffSignUp from './StaffSignUp'
import DashBoard from './DashBoard'
import Meetings from './Meetings'
import About from './About';
import Staff from './Staff';
import Admin from './Admin';
import StaffBoard from './StaffBoard';
import BlogDetails from "./BlogDetails";
import AdminLogin from './AdminLogin';

import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const rootElement = document.getElementById("root");

render(
  <BrowserRouter >
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/StaffLogin" element={<StaffLogin />} />
      <Route path="/StaffSignUp" element={<StaffSignUp/>} />
      <Route path="/DashBoard" element={<DashBoard/>} />
      <Route path="/Meetings" element={<Meetings />} />
      <Route path="/About" element={<About />} />
      <Route path="/Staff" element={<Staff />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/StaffBoard" element={<StaffBoard />} />
      <Route path ="/blogs/:id" element={<BlogDetails />} />
      <Route path ="/AdminLogin" element={<AdminLogin />} />
    </Routes>
    
  </BrowserRouter>,
  rootElement
);