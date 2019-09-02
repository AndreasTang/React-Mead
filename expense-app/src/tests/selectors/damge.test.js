import getVisibleDamge from '../../selectors/damge'
import moment from 'moment'
import damge from '../fixtures/damge'

test('Testing text filter', () => {
    const filter = {
        text: 'cut',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleDamge(damge, filter)
    expect(result).toEqual([damge[2]])
})

test('Testing startdate filter', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = getVisibleDamge(damge, filter)
    expect(result).toEqual([damge[1], damge[2]])
})

test('Testing enddate filter', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const result = getVisibleDamge(damge, filter)
    expect(result).toEqual([damge[2], damge[0]])
})

test('Testing sortby date filter', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleDamge(damge, filter)
    expect(result).toEqual([damge[1], damge[2], damge[0]])
})

test('Testing sortby amount filter', () => {
    const filter = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleDamge(damge, filter)
    expect(result).toEqual([damge[1], damge[2], damge[0]])
})