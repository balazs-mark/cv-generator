import { 
    SIDEBAR_UPDATE_REQUEST,
    SIDEBAR_UPDATE_SUCCESS,
    SIDEBAR_UPDATE_FAIL,
 } from '../constants/sidebarConstants'


export const sidebarReducer = (state = { list_of_sidebar_buttons: [] }, action) => {
    switch (action.type) {
        case SIDEBAR_UPDATE_REQUEST:
            return { loading: true }

        case SIDEBAR_UPDATE_SUCCESS:
            return { loading: false, list_of_sidebar_buttons: action.list_of_sidebar_buttons }

        case SIDEBAR_UPDATE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
