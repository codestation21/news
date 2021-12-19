import axios from "axios";
import Cookies from "js-cookie";
import {
    SIGNUP_SUCCESS,
    SIGNUP_LOADING,
    SIGNUP_ERROR,
    LOGIN_SUCCESS,
    LOGIN_LOADING,
    LOGIN_ERROR,
    AUTH_SUCCESS,
    AUTH_FAILED
} from "Redux/Constants/authConstant";


export const signUp = (data) => async (dispatch) => {
    dispatch({ type: SIGNUP_LOADING });
    const authData = {
        email: data.email,
        password: data.password,
        returnSecureToken: true

    }
    const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + process.env.NEXT_PUBLIC__API_KEY
    await axios.post(url, authData)
        .then(res => {
            Cookies.set('token', res.data.idToken, { expires: 1 / 24, path: '' })
            dispatch({ type: SIGNUP_SUCCESS })
        })
        .catch(err => {
            dispatch({
                type: SIGNUP_ERROR,
                payload: {
                    message: err.response.data.error.message
                }
            })
        })
}

export const login = (data) => async (dispatch) => {
    dispatch({ type: LOGIN_LOADING });
    const authData = {
        email: data.email,
        password: data.password,
        returnSecureToken: true

    }
    const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + process.env.NEXT_PUBLIC__API_KEY
    await axios.post(url, authData)
        .then(res => {
            Cookies.set('token', res.data.idToken, { expires: 1 / 24, path: '' })
            dispatch({ type: LOGIN_SUCCESS })
        })
        .catch(err => {
            dispatch({
                type: LOGIN_ERROR,
                payload: {
                    message: err.response.data.error.message
                }
            })
        })
}

export const authCheck = (token) => dispatch => {
    if (!token) {
        dispatch({ type: AUTH_FAILED })
        return false

    } else {
        dispatch({ type: AUTH_SUCCESS })
        return true;
    }
}