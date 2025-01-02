import {combineReducers, legacy_createStore as createStore} from "redux"
import todoReducers from "./reducers/todoReducers"
import counterReducers from "./reducers/counterReducers"


const topluReducer=combineReducers({
todoReducers:todoReducers,
counterReducers:counterReducers
})

export const store=createStore(topluReducer)