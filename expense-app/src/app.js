import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import damgeSelector from './selectors/damge'
import { addDamge } from './actions/damge'
import { editFilterText } from './actions/filter'
import AppRouter from './routers/AppRouter'
import './styles/styles.scss'
import 'normalize.css/normalize.css'

const store = configureStore()

store.dispatch(addDamge({description: 'face pouch', note: 'one', amount: 5, createAt:200}))
store.dispatch(addDamge({description: 'leg kick', note: 'two', amount: 40, createAt:1000}))
store.dispatch(addDamge({description: 'knife slash', note: 'three', amount: 25, createAt:2140}))
store.dispatch(editFilterText('pouch'))

const state = store.getState()
const visibleDamge = damgeSelector(state.damge, state.filter)
console.log(visibleDamge)

const jsx = (
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))

