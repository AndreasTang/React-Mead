const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'EDIT_FILTER_TEXT' : {
            return {
                ...state,
                text: action.text
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

export default filterReducer