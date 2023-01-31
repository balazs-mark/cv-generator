import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import { contentReducer } from './reducers/contentReducer'
import { sidebarReducer } from './reducers/sidebarReducer'


const reducer = combineReducers({
    fetched_content: contentReducer,
    fetched_sidebar: sidebarReducer,
})

const inisialState = {}

const middleware = [thunk]

const store = createStore(reducer, inisialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
