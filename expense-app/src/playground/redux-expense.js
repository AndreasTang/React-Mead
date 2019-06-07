import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

const damgeReducerDefaultState = []

const damgeReducer = (state = damgeReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_DAMGE': {
            return [...state, action.damge]
        }
        case 'REMOVE_DAMGE': {
            return state.filter(({ id }) => id !== action.id)
        }
        case 'EDIT_DAMGEAMOUNT' : {
            return state.map((damge) => {
                if (damge.id === action.id) {
                    return {
                        ...damge,
                        ...action.damgeAmount
                    }
                } else {
                    return damge
                }
            })
        }
        default: 
            return state
    }
}

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'EDIT_FILTERTEXT' : {
            return {
                ...state,
                ...action.text
            }
        }
        case 'SORT_BY_AMOUNT' : {
            return {
                ...state,
                ...action.sortBy
            }
        }
        case 'SORT_BY_DATE' : {
            return {
                ...state,
                ...action.sortBy
            }
        }
        case 'SET_START_DATE' : {
            return {
                ...state,
                startDate: action.date
            }
        }
        case 'SET_END_DATE' : {
            return {
                ...state,
                endDate: action.date
            }
        }
        default: 
            return state
    }
}

const store = createStore(
    combineReducers({
        damge: damgeReducer,
        filter: filterReducer
    })
)

const addDamge = ({ description = '', note = '', amount = '', createAt = 0 } = {}) => ({
    type: 'ADD_DAMGE',
    damge: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
})

const removeDamge = ({ id } = {}) => ({
    type: 'REMOVE_DAMGE',
    id
})

const editDamgeAmount = (id, damgeAmount ) => ({
    type: 'EDIT_DAMGEAMOUNT',
    id,
    damgeAmount
})

const editFilterText = (text) => ({
    type: 'EDIT_FILTERTEXT',
    text
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: {
        sortBy: 'amount'
    }
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: {
        sortBy: 'date'
    }
})

const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})

const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})

const getVisibleDamge = (damge, { text, sortBy, startDate, endDate }) => {
    return damge.filter((damge) => {
        const startDateMatch = typeof startDate !== 'number' || damge.createAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || damge.createAt <= endDate
        const textMatch = damge.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createAt > b.createAt ? -1 : 1
        } else if (sortBy === 'amount') {
            return a.amount > b.amount ? -1 : 1
        }
    })
}

store.subscribe(() => {
    const state = store.getState()
    const visibleDamge = getVisibleDamge(state.damge, state.filter)
    console.log(visibleDamge)
})

const damgeOne = store.dispatch(addDamge({description: 'face pouch', note: 'one', amount: 5, createAt:0}))
const damgeTwo = store.dispatch(addDamge({description: 'leg kick', note: 'two', amount: 10, createAt: 800}))
const damgeThree = store.dispatch(addDamge({description: 'face pouch', note: 'three', amount: 20, createAt: 500}))
//store.dispatch(removeDamge({id: damgeOne.damge.id}))
//store.dispatch(editDamgeAmount(damgeTwo.damge.id, { amount: 20 }))
//store.dispatch(editFilterText({ text: 'face' }))
store.dispatch(sortByAmount())
//store.dispatch(sortByDate())
//store.dispatch(setStartDate(125))
//store.dispatch(setStartDate())
//store.dispatch(setEndDate(1250))


