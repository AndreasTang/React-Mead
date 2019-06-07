import { createStore, combineReducers } from 'redux'
import damgeReducer from '../reducers/damge'
import filterReducer from '../reducers/filter'

const storeFun = () => {
    const store = createStore(
        combineReducers({
            damge: damgeReducer,
            filter: filterReducer
        })
    )
    return store
}

export default storeFun