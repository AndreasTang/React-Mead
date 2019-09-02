import { addDamge, removeDamge, editDamge } from '../../actions/damge'

test('Testing removeDamge action', () => {
    const action = removeDamge({ id: 'Jest test id' })
    expect(action).toEqual({
        type: 'REMOVE_DAMGE',
        id: 'Jest test id'
    })
})

test('Testing editDamge action', () => {
    const action = editDamge('Jest test id', {
        description: 'Jest test description',
        amount: 500
    })
    expect(action).toEqual({
        type: 'EDIT_DAMGEAMOUNT',
        id: 'Jest test id',
        editDamge: {
            description: 'Jest test description',
            amount: 500
        }
    })
})

test('Testing addDamge action', () => {
    const damge = {
        description: 'Jest test desciption',
        note: 'Jest test note',
        amount: 'Jest test amount',
        createdAt: 10000
    }
    const action = addDamge(damge)
    expect(action).toEqual({
        type: 'ADD_DAMGE',
        damge: {
            ...damge,
            id: expect.any(String)
        }
    })
})

test('Tesing addDamge action default value', () => {
    const action = addDamge()
    expect(action).toEqual({
        type: 'ADD_DAMGE',
        damge: {
            description: '',
            note: '',
            amount: '',
            createdAt: 0,
            id: expect.any(String)
        }
    })
})