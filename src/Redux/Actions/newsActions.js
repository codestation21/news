import axios from "axios";
import {
    GET_ALL_NEWS_LOADING,
    GET_ALL_NEWS_SUCCESS,
    GET_ALL_NEWS_ERROR
} from "../Constants/newsConstants";


export const getAllNews = (name) => async (dispatch) => {
    dispatch({ type: GET_ALL_NEWS_LOADING })
    const options = {
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        params: { q: `${name}`, lang: 'en' },
        headers: {
            'x-rapidapi-host': 'free-news.p.rapidapi.com',
            'x-rapidapi-key': `${process.env.NEXT_PUBLIC_NEWS_API}`
        }
    };
    await axios.request(options)
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