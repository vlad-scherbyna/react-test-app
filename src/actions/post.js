import axios from 'axios'
import {
    FETCH_POSTS_ERROR,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_START
} from "./actionTypes";

export function fetchPostStart() {
    return {
        type: FETCH_POSTS_START,
    }
}

export function fetchPostsError(e) {
    return {
        type: FETCH_POSTS_ERROR
    }
}

export function fetchPostsSuccess(posts) {
    return {
        type: FETCH_POSTS_SUCCESS,
        posts
    }
}

export function fetchPostData() {
    return async dispatch => {
        dispatch(fetchPostStart())

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            dispatch(fetchPostsSuccess(response.data))
        }
        catch (e) {
            dispatch(fetchPostsError(e))
        }

    }
}