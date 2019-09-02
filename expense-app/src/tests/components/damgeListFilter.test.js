import React from 'react'
import { shallow } from 'enzyme'
import { DamgeListFilter } from '../../components/damgeListFilter'
import { filter1, filter2, filter3 } from '../fixtures/filter';

let editFilterText, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    editFilterText = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(
        <DamgeListFilter
        filter = {filter1}
        editFilterText = {editFilterText}
        sortByDate = {sortByDate}
        sortByAmount = {sortByAmount}
        setStartDate = {setStartDate}
        setEndDate = {setEndDate}
        />)
})

test('Testing should DamgeListFilter with filter1 render currectly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Testing should DamgeListFilter with filter2 render currectly', () => {
    wrapper.setProps({
        filter:filter2
    })
    expect(wrapper).toMatchSnapshot()
})

test('Testing should filter text change', () => {
    const value = 'Testing text'
    wrapper.find('input').simulate('change', {
        target: { value }
    })
    expect(editFilterText).toHaveBeenLastCalledWith(value)
})

test('Testing should sort by date', () => {
    wrapper.setProps({
        filter: filter2
    })
    const value = 'date'
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('Testing should sort by amount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('Testing should date change', () => {
    const startDate = filter2.startDate
    const endDate = filter2.endDate
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate })
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('Testing should focus change', () => {
    const calendarFocused = 'startDate'
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toEqual(calendarFocused)
})
