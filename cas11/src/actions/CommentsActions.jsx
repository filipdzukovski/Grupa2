import {FETCH_COMMENTS_FAIL,FETCH_COMMENTS_SUCCESS} from './../constants/CommentsConstants';
import axios from "axios";

export const fetchCommentsSuccess = (comments) => { // comments -> Array(500)
    return{
        type:FETCH_COMMENTS_SUCCESS,
        payload:comments
    }
}

export const fetchCommentsFail = (error) => { // alert na error od requestot
    return{
        type:FETCH_COMMENTS_FAIL,
        payload:error
    }
}

export const fetchCommentsRequest = () => {
    return dispatch =>{
        axios.get("https://jsonplaceholder.typicode.com/comments") //povik do url za comments
            .then(result => dispatch(fetchCommentsSuccess(result.data))) //ako e uspesna akcijata dispatch akcija za comments success
            .catch(error=> dispatch(fetchCommentsFail(error.message))) //ako e neuspesna dispatch na akcija za fail
    }
}