import filterReducer from '../../reducers/filter'
import { sortByDate, setStartDate, setEndDate } from '../../actions/filter'
import moment from 'moment'

test('Testing filter reducer init', () => {
    const result = filterReducer(undefined, { type: '@@INIT' })
    expect(result).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('Testing filter reducer EDIT_FILTER_TEXT action', () => {
    const result = filterReducer(undefined, {
        type: 'EDIT_FILTER_TEXT',
        text: 'Jest test text'
    })
    expect(result).toEqual({
        text: 'Jest test text',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

//down below is the method use by course

test('Testing filter reducer SORT_BY_AMOUNT action', () => {
    const result = filterReducer(undefined, {
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    })
    expect(result.sortBy).toBe('amount')
})

//down below is another method

test('Testing filter reducer SORT_BY_DATE action', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = filterReducer(currentState, sortByDate())
    expect(result.sortBy).toBe('date')
})

test('Testing filter reducer SET_START_DATE action', () => {
    const result = filterReducer(undefined, setStartDate(moment(1000).valueOf()))
    expect(result.startDate).toEqual(moment(1000).valueOf())
})

test('Testing filter reducer SET_END_DATE action', () => {
    const result = filterReducer(undefined, setEndDate(moment(-1000).valueOf()))
    expect(result.endDate).toEqual(moment(-1000).valueOf())
})

//down below is for testing my thougth

test('Testing something', () => {
    const text = 'Testing'
    const action = {
        type: 'EDIT_FILTER_TEXT',
        text
    }
    const result = filterReducer(undefined, action)
    expect(result.text).toBe(text)
})

