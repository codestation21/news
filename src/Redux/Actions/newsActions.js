import axios from "axios";
import {
    GET_ALL_NEWS_LOADING,
    GET_ALL_NEWS_SUCCESS,
    GET_ALL_NEWS_ERROR,
    GET_TOP_HEADLINES_SUCCESS,
    GET_TOP_HEADLINES_LOADING,
    GET_TOP_HEADLINES_ERROR
} from "../Constants/newsConstants";


export const getAllNews = (name) => async (dispatch) => {
    dispatch({ type: GET_ALL_NEWS_LOADING })
    const url = `https://newsapi.org/v2/everything?q=${name ? name : "Food"}&sortBy=popularity&apiKey=${process.env.NEXT_PUBLIC_NEWS_API}`
    await axios.get(url)
        .then(res => {
            dispatch({
                type: GET_ALL_NEWS_SUCCESS,
                payload: {
                    newses: res.data.articles
                }
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ALL_NEWS_ERROR,
                payload: {
                    message: err.response.data.message
                }
            })
        })
}

export const getHeadlines = () => async (dispatch) => {
    dispatch({ type: GET_TOP_HEADLINES_LOADING })
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_API}`
    await axios.get(url)
        .then(res => {
            dispatch({
                type: GET_TOP_HEADLINES_SUCCESS,
                payload: {
                    headlines: res.data.articles
                }
            })
        })
        .catch(err => {
            dispatch({
                type: GET_TOP_HEADLINES_ERROR,
                payload: {
                    message: err.response.data.message
                }
            })
        })
}