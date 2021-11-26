import NavBar from "./Navbar";
import Footer from "./footer/Footer";
import {Carousel} from 'react-bootstrap'
import happyfamily from './Images/happyFamily.jpeg';
import armsout from './Images/armsoutstretched.jpeg';
import holdinghands from './Images/HoldingHandsimg.jpeg';
import 'bootstrap/dist/css/bootstrap.css';
import useFetch from "./useFetch";
import BlogList from "./BlogList";

function DashBoard(){
    const {data:blogs, pending, error} = useFetch('http://localhost:8000/blogs')
    return(
        <div>
        <div Container>
            <div>
            <NavBar/>
            </div>
            <div style={{marginTop: "auto", marginBottom:"auto"}}>
                <Carousel >
                    <Carousel.Item>
        <img
        className="d-block w-100"
        src={happyfamily} height="500px" width="100%"
        alt="First slide"
    />
    <Carousel.Caption>
        <h3>Relationship with family</h3>
        <p>Build and strengthen your relationship with family and community, Become a better you throught Hardwork and persevearance
            We are with You All step of the Way, Get started Now
        </p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
        className="d-block w-100"
        src={armsout} height="500px" width="100%"
        alt="Second slide"
    />

    <Carousel.Caption>
        <h3>Self Improvement</h3>
        <p>Be The best You You can be, Join self Improvement meetings, Read posts, Build a community.
            Recovery Begins from you, Nothing is permanent in this life.
        </p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
        className="d-block w-100"
        src={holdinghands} height="500px" width="100%"
        alt="Third slide"
    />

    <Carousel.Caption>
        <h3>Stay Connected</h3>
        <p>Connect with people around the world, Be mentored by professionals and work on growing together.

        </p>
    </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    <br/>
            </div>
            <h2 style={{color:"aliceblue",textAlign:"center"}}>Posts from Staff</h2>
            <div style={{marginTop: "auto", marginBottom:"auto"}}>
                {error && <div>{ error }</div>}
            {pending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} />}
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author === "self")} title="selfs blogs"/> */}

            </div>



            
        
        </div>
        <Footer/>
        </div>
        
    )

}
export default DashBoard;