import { 
    CV_CONTENT_UPDATE_REQUEST,
    CV_CONTENT_UPDATE_SUCCESS,
    CV_CONTENT_UPDATE_FAIL,
 } from '../constants/cvContentConstants'


export const contentReducer = (state = { general: {}, personal_infos: {}, datas: [] }, action) => {
    switch (action.type) {
        case CV_CONTENT_UPDATE_REQUEST:
            return { loading: true }

        case CV_CONTENT_UPDATE_SUCCESS:
            return { loading: false, general: action.general, personal_infos: action.personal_infos, datas: action.datas}

        case CV_CONTENT_UPDATE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
