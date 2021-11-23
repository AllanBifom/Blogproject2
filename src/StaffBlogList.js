import { NavLink, } from "react-router-dom";
import React, { useState } from 'react';
import styled from 'styled-components';
import {Button} from "react-bootstrap";


const BlogList = ({blogs, title, handledelete}) => {
    
    
    
    return(

        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(<div className="blog-preview" key={blog.id}>
                
                <NavLink to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
                </NavLink>
                <Button variant='danger'onClick={() => { handledelete(blog.id)}}>
                    delete
                    </Button>
            </div>))}
        </div>
    )
}
export default BlogList