import {
  fetchPostsFail,
  fetchPostsRequest,
  fetchPostsSuccess,
} from "./actions";
import { getPosts } from "../../../api/postsApi";

export const fetchPosts = (requestParams) => {
  return (dispatch) => {
    dispatch(fetchPostsRequest(requestParams));
    return getPosts(requestParams)
      .then((result) => {
        dispatch(fetchPostsSuccess(result));
        return result;
      })
      .catch((err) => {
        dispatch(fetchPostsFail(err));
        return err;
      });
  };
};
