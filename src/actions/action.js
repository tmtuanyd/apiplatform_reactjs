import axios from "axios";
import {BASE_URL} from "../Constants";

export const BLOG_POST_LIST_REQUEST = 'BLOG_POST_LIST_REQUEST';
export const BLOG_POST_LIST_RECEIVE = 'BLOG_POST_LIST_RECEIVE';
export const BLOG_POST_LIST_ERROR = 'BLOG_POST_LIST_ERROR';
export const BLOG_POST_LIST_ADD = 'BLOG_POST_LIST_ADD';

export const blogPostListRequest = () => ({
    type: BLOG_POST_LIST_REQUEST,
})

export const blogPostListError = (err) => ({
    type: BLOG_POST_LIST_ERROR,
    err
})

export const blogPostListReceive= (data) => ({
    type: BLOG_POST_LIST_RECEIVE,
    data
})

export const blogPostListFetch = () => {
    return (dispatch) => {
        dispatch(blogPostListRequest());
        return axios.get(BASE_URL+'/api/blog_posts')
            .then(res=>dispatch(blogPostListReceive(res)))
            .catch(err=>dispatch(blogPostListError(err)))
    }
}

export const blogPostAdd = () => ({
    type: BLOG_POST_LIST_ADD,
    data: {
        id: Math.floor(Math.random()*100+3),
        title: 'A newly add blog post'
    }
})