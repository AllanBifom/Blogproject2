
import NavBar from "./Navbar"
import Footer from "./footer/Footer"
import 'bootstrap/dist/css/bootstrap.css';
import useFetch from "./useFetch"
import MeetingList from "./MeetingList"
import {Container, Row, Col, Image} from "react-bootstrap"
import group from "./Images/download.jpeg"
import team from "./Images/teambuilding.jpeg"


function Meetings(){
    const {data:meetings, pending, error} = useFetch('http://localhost:8000/meetings')
    return(
        <div>
            <div Container>
            <NavBar />

            <Container>
                <Row>
                    <Col sm={8}> <iframe width="100%" height="100%" src="https://www.youtube.com/embed/a7tsLHKuQCU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
                    <Col sm={4}>
                    <h3 style={{fontStyle:"Spectral", textAlign:"center", color:"aliceblue"}}>Welcome to Meetings Channel</h3>
                                <h4 style={{fontStyle:"Spectral", textAlign:"center",color:"aliceblue"}}>Click a meeting and go to the link</h4>
                                </Col>
                </Row>
                <Row>
                    <Col>
                    <h4 style={{fontStyle:"Spectral", textAlign:"center",color:"aliceblue"}}>
                        Connect with People Around the world
                    </h4>
                    </Col>
                </Row>
                <Row>
                    <Col ><Image src={group} rounded fluid/></Col>
                    <Col ><Image src={team} rounded fluid/></Col>
                    <Col > <h3 style={{fontStyle:"Spectral", textAlign:"center", color:"aliceblue"}}>See that you are not Alone.
                    People around The world face similar issues Like you do. Enter a meeting and get started in your journey to recovery
                    </h3></Col>
                </Row>
</Container>

            
            <div tyle={{marginTop: "auto", marginBottom:"auto"}}>
                <br/>
                <h3 style={{fontStyle:"Spectral", textAlign:"center", color:"aliceblue"}}> Meetings Below </h3>
            {error && <div>{ error }</div>}
            {pending && <div>Loading...</div>}
            {meetings && <MeetingList meetings={meetings} />}
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author === "self")} title="selfs blogs"/> */}
            
            </div>
            </div>
            
                <Footer />
            
            
            

        </div>
    )

}
export default Meetings