import axios from 'axios'

import { 
    CV_CONTENT_UPDATE_REQUEST,
    CV_CONTENT_UPDATE_SUCCESS,
    CV_CONTENT_UPDATE_FAIL,
 } from '../constants/cvContentConstants'


export const fetchContent = ({language, cv_type}) => async (dispatch) => {
    try {
        dispatch({ type: CV_CONTENT_UPDATE_REQUEST })

        var api_url
        if (language === "english" && cv_type ==="normal") {
            api_url = 'https://www.mark-balazs.eu/cv/get-content/en'
        } else if (language === "hungarian" && cv_type ==="normal") {
            api_url = 'https://www.mark-balazs.eu/cv/get-content/hu'
        } else if (language === "english" && cv_type ==="gov") {
            api_url = 'https://www.mark-balazs.eu/cv/get-content/gov/en'
        } else if (language === "hungarian" && cv_type ==="gov") {
            api_url = 'https://www.mark-balazs.eu/cv/get-content/gov/hu'
        } else {
            api_url = 'https://www.mark-balazs.eu/cv/get-content/hu'
        }

        const { data } = await axios.get(api_url)

        dispatch({
            type: CV_CONTENT_UPDATE_SUCCESS,
            general: data.general,
            personal_infos: data.personal_infos,
            datas: data.datas,
        })

    } catch (error) {
        dispatch({
            type: CV_CONTENT_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
