import Footer from "./footer/Footer";
import 'bootstrap/dist/css/bootstrap.css';
import {Row, Col, Container, Form, Button} from 'react-bootstrap'
import React, { useState } from 'react';
import useFetch from "./useFetch";
import BlogList from "./StaffBlogList";
import MeetingList from "./StaffMeetingList";
import { useNavigate } from "react-router-dom";

function Admin(){
    const Navigate = useNavigate();
    const {data: blogs, pending, error} = useFetch('http://localhost:8000/blogs')
    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('');
    const[isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => { 
        e.preventDefault();
        const blog = {title , body, author};
        setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() =>{
            console.log('new blog added');
            setIsPending(false)
        }).then(() => {window.location.reload(false);})
    }
    const handleClick = (id) => {        
        
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {window.location.reload(false);})

    }
    /****************************************************************************************** */
    const {data: meetings, pending2, error2} = useFetch('http://localhost:8000/meetings')
    const[topic, setTopic] = useState('');
    const[link, setLink] = useState('');
    const[host, setHost] = useState('');
    const[IsPending, SetIsPending] = useState(false);

    const handleSubmit2 = (e) => { 
        e.preventDefault();
        const meetings = {topic , link, host};
        setIsPending(true);
        fetch('http://localhost:8000/meetings',{
            method: 'POST',
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(meetings)
        }).then(() =>{
            console.log('new meeting added');
            setIsPending(false)
            window.location.reload(false);
        })
    }
    const handleClick2 = (id) => {        
        
        fetch('http://localhost:8000/meetings/' + id, {
            method: 'DELETE'
        }).then(() => {window.location.reload(false);})

    }
    
    return(
        <div>
            
                <div Container>
    <Container>
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
    <Row>
    <Col xs={12} md={8}>
        <h4 style={{color:"aliceblue",fontFamily:"Farah"}}> Welcome To Staff Place <br /> 
        Post messages and your zoom meeting links on this board.<br/>
        Remember you are here to help, Watch the videos below to understand more.<br/>
        This page gives you the ability to post messages for our followers on the dashboard.<br/>
        Those messages should include Things/blogs That help them face their problems.<br/>
        <ul className="list-unstyled">
            <li>Post meetings as well on meeting board</li>
            <li>Remember To delete meetings as well unless recurring ones</li>

        </ul>
        </h4>
    </Col>
    <Col xs={6} md={4}>
        <div class="gfm-embed" data-url="https://www.gofundme.com/f/stacie-vs-cancer-part-ii/widget/large/"></div>
    </Col>
    </Row>

  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
    <Row>
    <Col xs={6} md={4}>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/fvdn7vd-tz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Col>
    <Col xs={6} md={4}>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/XH2tF8oB3cw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Col>
    <Col xs={6} md={4}>
        <h3 style={{color:"aliceblue"}}>Add new Staff Here</h3>
        <Button variant="primary" onClick={() =>{Navigate("/StaffSignUp")}}>Add Staff</Button>
        <h3 style={{color:"aliceblue"}}>Remove Staff</h3>
        <Button variant="primary" disabled>Remove Staff</Button>
    </Col>
    </Row>

  {/* Columns are always 50% wide, on mobile and desktop */}
    <div Container>
    <Row>
    <Col xs={6}>
    <div style={{boxShadow: "0 2px 5px #070300", alignItems:"center"}} className="p-3">
    <Form className="p-3" onSubmit={handleSubmit}>
        <h3 style={{textAlign:"centre",color:"aliceblue"}}> Dashboard Post area </h3>
    <Form.Group className="mb-3" controlId="text">
    <Form.Control type="text" placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)}/>
    <Form.Text className="text-muted">
        
    </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="text">
    <Form.Label style={{color: "White"}}>Message Body</Form.Label>
    <Form.Control as="textarea" rows={3} onChange={(e) => setBody(e.target.value)} />
    <Form.Text className="text-muted">
    </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="text">
    <Form.Control type="text" placeholder="Enter Author:" onChange={(e) => setAuthor(e.target.value)} />
    </Form.Group>
    {!isPending &&<Button variant="primary" type="submit">
        Add Post To DashBoard
    </Button>}
    { isPending && <Button variant="primary" disabled>Adding Post...</Button>}
    
</Form>
<div>
    {error && <div>{ error }</div>}
    {pending && <div>Loading...</div>}
    {blogs && <BlogList blogs={blogs} title="Message Postbox" handledelete={handleClick} />}

</div>

</div>


</Col>



    <Col xs={6}>
        <div style={{boxShadow: "0 2px 5px #070300", alignItems:"center"}} className="p-3">
    <Form className="p-3"onSubmit={handleSubmit2}>
        <h3 style={{textAlign:"centre",color:"aliceblue"}}> Meeting Board </h3>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Enter Topic" onChange={(e) => setTopic(e.target.value)}/>
    <Form.Text className="text-muted">
    </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Post Link Url" onChange={(e) => setLink(e.target.value)}/>
    <Form.Text className="text-muted">
    </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="text" placeholder="Enter Host " onChange={(e) => setHost(e.target.value)}/>
    </Form.Group>
    {!IsPending &&<Button variant="primary" type="submit">
    Add A new meeting
    </Button>}
    { IsPending && <Button variant="primary" disabled>Adding meeting...</Button>}
</Form>
<div>
                {error2 && <div>{ error }</div>}
                {pending2 && <div>Loading...</div>}
                {meetings && <MeetingList meetings={meetings} title="Message Postbox" handledelete={handleClick2} />}
</div>
</div>

    </Col>
    </Row>
    </div>
</Container>
        </div>


            
            <Footer/>
            
            
        </div>
    )

}
export default Admin;