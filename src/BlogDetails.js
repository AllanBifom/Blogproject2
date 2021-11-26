import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";


const BlogDetails = () =>{
    const Navigate = useNavigate();
    
    const {id} = useParams();
    const {data: blog, error, pending} = useFetch('http://localhost:8000/blogs/' + id)
    return(
        <div className="blog-details" style={{display: "flex", justifyContent:"center", alignContent:"center"}}>
            <div class="h-100 d-inline-block w-50 p-3 ">
            {pending && <div>loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article class="p-3 mb-2 bg-light text-dark" style={{borderRadius:"10px"}}>
                    <h1 className="text-dark">{blog.title}</h1>
                    <h4>Written by { blog.author }</h4>
                    <div>{blog.body}</div>
                     <Button onClick={() =>{Navigate(-1)}}>
                        &lt; Back
                    </Button>
                   
                </article>
            )}
            </div>
        </div>
    )
}
export default BlogDetails;