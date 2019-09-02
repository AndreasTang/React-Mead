import React from 'react'
import { shallow } from 'enzyme'
import { Edit } from '../../components/edit'
import damge from '../fixtures/damge'

let edit, remove, history, wrapper

beforeEach(() => {
    edit = jest.fn()
    remove = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<Edit editDamge = {edit} removeDamge = {remove} history = {history} damge = {damge[0]} />)
})

test('Testing should Edit page render correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Testing should handle editDamge', () => {
    wrapper.find('DamgeForm').prop('onSubmit')(damge[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(edit).toHaveBeenLastCalledWith(damge[0].id, damge[0])
})

test('Testing should handle removeDamge', () => {
    wrapper.find('button').prop('onClick')(damge[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(remove).toHaveBeenLastCalledWith({id: damge[0].id})
})