import React from 'react';
import {Button} from "react-bootstrap";


const BlogList = ({meetings, topic, handledelete}) => {
    
    return(

        <div className="blog-list">
            <h2>{topic}</h2>
            {meetings.map((meeting)=>(<div className="blog-preview" key={meeting.id}>
                <h2>{meeting.topic}</h2>
                <p>hosted by {meeting.host}</p>
                <a href={meeting.link} style={{color:"red"}}>LINK: {meeting.link}</a><br/><br/>
                <Button variant="danger" onClick={() => { handledelete(meeting.id)}}>
                    delete
                    </Button>
            </div>))}
        </div>
    )
}
export default BlogList