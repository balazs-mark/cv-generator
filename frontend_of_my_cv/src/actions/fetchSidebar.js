import axios from 'axios'

import { 
    SIDEBAR_UPDATE_REQUEST,
    SIDEBAR_UPDATE_SUCCESS,
    SIDEBAR_UPDATE_FAIL,
 } from '../constants/sidebarConstants'


export const fetchSidebar = ({language, cv_type}) => async (dispatch) => {
    try {
        dispatch({ type: SIDEBAR_UPDATE_REQUEST })

        var api_url_for_sidebar_fetching

        if (language === "english" && cv_type ==="normal") {
            api_url_for_sidebar_fetching = 'https://www.mark-balazs.eu/cv/sidebar/en'
        } else if (language === "hungarian" && cv_type ==="normal") {
            api_url_for_sidebar_fetching = 'https://www.mark-balazs.eu/cv/sidebar/hu'
        } else if (language === "english" && cv_type ==="gov") {
            api_url_for_sidebar_fetching = 'https://www.mark-balazs.eu/cv/sidebar/gov/en'
        } else if (language === "hungarian" && cv_type ==="gov") {
            api_url_for_sidebar_fetching = 'https://www.mark-balazs.eu/cv/sidebar/gov/hu'
        } else {
            api_url_for_sidebar_fetching = 'https://www.mark-balazs.eu/cv/sidebar/hu'
        }

        const { data } = await axios.get(api_url_for_sidebar_fetching)

        dispatch({
            type: SIDEBAR_UPDATE_SUCCESS,
            list_of_sidebar_buttons: data,
        })

    } catch (error) {
        dispatch({
            type: SIDEBAR_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
