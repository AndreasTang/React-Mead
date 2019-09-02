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
                        ...action.editDamge
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

export default damgeReducer