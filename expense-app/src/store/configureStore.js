import { createStore, combineReducers } from 'redux'
import damgeReducer from '../reducers/damge'
import filterReducer from '../reducers/filter'

const storeFun = () => {
    const store = createStore(
        combineReducers({
            damge: damgeReducer,
            filter: filterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}

export default storeFun