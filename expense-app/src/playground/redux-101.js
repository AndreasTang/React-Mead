import { createStore } from 'redux'

const add = ({ addNum = 1 }) => ({
    type: 'ADD',
    addNum
})

const minus = ({ minusNum = 1 }) => ({
    type: 'MINUS',
    minusNum
})

const set = ({setNum}) => ({
    type: 'SET',
    setNum
})

const reset = () => ({
    type: 'RESET'
})

const countReducer = (state = { count: 0 }, action) => {

    switch (action.type) {
        case 'ADD':
            return {
                count: state.count + action.addNum
            }
        case 'MINUS':
            return {
                count: state.count - action.minusNum
            }
        case 'SET':
            return {
                count: action.setNum
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(add({ addNum: 9 }))

store.dispatch(add({}))

store.dispatch(reset())

store.dispatch(minus({}))

store.dispatch(minus({minusNum: 9}))

store.dispatch(set({setNum: 404}))