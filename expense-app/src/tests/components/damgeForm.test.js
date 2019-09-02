import React from 'react'
import { shallow } from 'enzyme'
import DamgeForm from '../../components/damgeForm'
import damge from '../fixtures/damge'
import moment from 'moment'

test('Testing should DamgeForm render correctly', () => {
    const wrapper = shallow(<DamgeForm />)
    expect(wrapper).toMatchSnapshot()
})

test('Testing should DamgeForm with data render correctly', () => {
    const wrapper = shallow(<DamgeForm damge = {damge[0]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Testing should render error when invalid form submission', () => {
    const wrapper = shallow(<DamgeForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error')).toEqual(true)
    expect(wrapper).toMatchSnapshot()
})

test('Testing should description change on input change', () => {
    const value = 'Testing Description'
    const wrapper = shallow(<DamgeForm />)
    expect(wrapper).toMatchSnapshot
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('description')).toBe(value)
})

test('Testing should note change on textarea change', () => {
    const value = 'Testing Note'
    const wrapper = shallow(<DamgeForm />)
    expect(wrapper).toMatchSnapshot
    wrapper.find('textarea').simulate('change', {
        target: { value }
    })
    expect(wrapper.state('note')).toBe(value)
})

test('Testing should amount change on valid input change', () => {
    const value = '50'
    const wrapper = shallow(<DamgeForm />)
    expect(wrapper).toMatchSnapshot
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe(value)
})

test('Testing should amount change on invalid input change', () => {
    const value = '50.5.54'
    const wrapper = shallow(<DamgeForm />)
    expect(wrapper).toMatchSnapshot
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe('')
})

test('Testing should onSubmit prop get called when valid submission', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<DamgeForm damge = {damge[2]} onSubmit = {onSubmitSpy} />)
    expect(wrapper).toMatchSnapshot
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error')).toBe(false)
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: damge[2].description,
        amount: damge[2].amount,
        note: damge[2].note,
        createdAt: damge[2].createdAt.valueOf()
    })
})

test('Testing should new date setted when on date change', () => {
    const now = moment()
    const wrapper = shallow(<DamgeForm />)
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('Testing should focus change when on focus change', () => {
    const wrapper = shallow(<DamgeForm />)
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused: true })
    expect(wrapper.state('datePickerFocused')).toEqual(true)
})