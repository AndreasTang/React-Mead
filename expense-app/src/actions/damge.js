import uuid from 'uuid'

const addDamge = ({ description = '', note = '', amount = '', createdAt = 0 } = {}) => ({
    type: 'ADD_DAMGE',
    damge: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeDamge = ({ id } = {}) => ({
    type: 'REMOVE_DAMGE',
    id
})

const editDamge = (id, editDamge ) => ({
    type: 'EDIT_DAMGEAMOUNT',
    id,
    editDamge
})


export { addDamge, removeDamge, editDamge }