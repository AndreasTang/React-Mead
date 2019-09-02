import moment from 'moment'
import { editFilterText, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filter'

test('Testing editFilterText action', () => {
    const text = 'Jest test text'
    const action = editFilterText(text)
    expect(action).toEqual({
        type: 'EDIT_FILTER_TEXT',
        text
    })
})

test('Testing editFilterText action default value', () => {
    const action = editFilterText()
    expect(action).toEqual({
        type: 'EDIT_FILTER_TEXT',
        text: ''
    })
})

test('Testing sortByAmount action', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    })
})

test('Testing sortByDate action', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    })
})

test('Testing setStartDate action', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
})

test('Testing setEndDate action', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
})