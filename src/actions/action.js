import axios from "axios";
import {BASE_URL, USER_LOGIN_SUCCESS} from "../Constants";
import {SubmissionError} from 'redux-form'
import {requests} from "../axios";

export const BLOG_POST_LIST_REQUEST = 'BLOG_POST_LIST_REQUEST';
export const BLOG_POST_LIST_RECEIVE = 'BLOG_POST_LIST_RECEIVE';
export const BLOG_POST_LIST_ERROR = 'BLOG_POST_LIST_ERROR';
export const BLOG_POST_LIST_ADD = 'BLOG_POST_LIST_ADD';
export const USER_PROFILE_REQUEST = 'USER_PROFILE_REQUEST';
export const USER_PROFILE_RECEIVED = 'USER_PROFILE_RECEIVED';
export const USER_PROFILE_ERROR = 'USER_PROFILE_ERROR';



export const blogPostListRequest = () => ({
    type: BLOG_POST_LIST_REQUEST,
})

export const blogPostListError = (err) => ({
    type: BLOG_POST_LIST_ERROR,
    err
})

export const blogPostListReceive= (data) => ({
    type: BLOG_POST_LIST_RECEIVE,
    data: data.data && data.data['hydra:member']
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

export const userLoginAttempt = (username, password) => {
    return (dispatch) => {
        return axios.post(BASE_URL+'/api/login_check', {username, password})
            .then(res => {
                console.log(res.data)
                dispatch(userLoginSuccess(res.data.token, JSON.stringify(res.data.data)))
            })
            .catch(err=>{
                console.log(err)
                // if(err){
                //     throw new SubmissionError({
                //             _error: 'Username or password is invalid'
                //         }
                //     )
                // }
            })
    }
}

export const userLoginSuccess = (token, user) => {
    return {
        type: USER_LOGIN_SUCCESS,
        token,
        user
    }
}

export const userProfileRequest = () => {
    return {
        type: USER_PROFILE_REQUEST,
    }
}
export const userProfileReceived = (userData) => {
    console.log(userData)
    return {
        type: USER_PROFILE_RECEIVED,
        userData
    }
}
export const userProfileError = (err) => {
    console.log(err)
    return {
        type: USER_PROFILE_ERROR,
        err
    }
}

export const userFetch = (userId) => {
    return (dispatch) => {
        dispatch(userProfileRequest());
        return requests.get(`/api/user/${userId}`)
            .then(
                res => dispatch(userProfileReceived(res.data))
            )
            .catch(err => dispatch(userProfileError(err)))
    }
}
