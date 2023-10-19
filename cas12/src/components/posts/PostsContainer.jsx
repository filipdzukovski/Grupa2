import { useEffect } from "react";
import { PostsComponent } from "./PostsComponent";
import { useDispatch,useSelector } from "react-redux";
import { fetchPosts } from "./duck/operations";

export default function PostsContainer(){

    const dispatch = useDispatch();
    const posts = useSelector(state=>state.postsReducer.posts)
    const error = useSelector(state=>state.postsReducer.error)

    useEffect(()=>{
        dispatch(fetchPosts(localStorage.getItem("token")))
    },[dispatch])

    return(
        <div id="posts-container">
            <PostsComponent listOfPosts={posts} error={error}/>
        </div>
    )
}