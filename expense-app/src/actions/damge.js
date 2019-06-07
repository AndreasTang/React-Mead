import uuid from 'uuid'

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


export { addDamge, removeDamge, editDamgeAmount }