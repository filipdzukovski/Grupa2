import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'

export const CommentDetails = () => {
    const [commentDetails, setCommentDetails] = useState({});
    let { commentId } = useParams();
  
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments/" + commentId)
            .then(res=>setCommentDetails(res.data))
            .catch(err=>alert(err.message))
    },[])
  return (
    <div id="comment-details">
      <h2>{commentDetails.name}</h2>
      <h3>{commentDetails.email}</h3>
      <p>{commentDetails.body}</p>
    </div>
  );
};
