import damgeReducer from '../../reducers/damge'
import fixDamge from '../fixtures/damge'
import { addDamge, removeDamge, editDamge } from '../../actions/damge'

test('Testing damgeReducer default init', () => {
    const result = damgeReducer(undefined, { type: '@@INIT' })
    expect(result).toEqual([])
})

test('Testing damgeReducer default ADD_DAMGE action', () => {
    const result = damgeReducer(undefined, addDamge())
    expect(result).toEqual([{
        description: '',
        note: '',
        amount: '',
        createdAt: 0,
        id: expect.any(String)
    }])
})

test('Testing damgeReducer ADD_DAMGE action', () => {
    const testState = [{
        id: '454545dad',
        description: 'Jest addDamge testing 1',
        note: '',
        amount: '1000',
        createdAt: 5210
    }]
    const testDamge = {
        description: 'Jest addDamge testing 2',
        note: '',
        amount: '500',
        createdAt: 0
    }
    const result = damgeReducer(testState, addDamge(testDamge))
    expect(result).toEqual([...testState, {...testDamge, id: expect.any(String)}])
})

//another method

test('Testing damgeReducer ADD_DAMGE action(another method)', () => {
    const testDamge = {
        description: 'Jest addDamge testing 2',
        note: '',
        amount: '500',
        createdAt: 0
    }
    const result = damgeReducer(fixDamge, addDamge(testDamge))
    expect(result).toEqual([...fixDamge, {...testDamge, id: expect.any(String)}])
})

test('Testing damgeReducer REMOVE_DAMGE action', () => {
    const result = damgeReducer(fixDamge, removeDamge({ id : fixDamge[0].id }))
    expect(result).toEqual([fixDamge[1], fixDamge[2]])
})

test('Testing damgeReducer REMOVE_DAMGE action(if id not match)', () => {
    const result = damgeReducer(fixDamge, removeDamge({ id : 'anything' }))
    expect(result).toEqual(fixDamge)
})

test('Testing damgeReducer EDIT_DAMGEAMOUNT action', () => {
    const testDamge = {
        description: 'Jest editDamge testing',
        note: '',
        amount: '1000',
        createdAt: 0
    }
    const result = damgeReducer(fixDamge, editDamge(fixDamge[1].id, testDamge))
    expect(result).toEqual([fixDamge[0], {...fixDamge[1], ...testDamge}, fixDamge[2]])
})

test('Testing damgeReducer EDIT_DAMGEAMOUNT action(if id not match)', () => {
    const testDamge = {
        description: 'Jest editDamge testing',
        note: '',
        amount: '1000',
        createdAt: 0
    }
    const result = damgeReducer(fixDamge, editDamge('anything', testDamge))
    expect(result).toEqual(fixDamge)
})