import React from 'react'
import { shallow } from 'enzyme'
import { Add } from '../../components/add'
import damge from '../fixtures/damge'

let add, history, wrapper

beforeEach(() => {
    add = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<Add add = {add} history = {history} />)
})

test('Testing should render Add page correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Testing should handle onSumbit', () => {
    wrapper.find('DamgeForm').prop('onSubmit')(damge[1])
    expect(history.push).toHaveBeenLastCalledWith('./')
    expect(add).toHaveBeenLastCalledWith(damge[1])
})