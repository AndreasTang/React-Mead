import React from 'react'
import { shallow } from 'enzyme'
import { DamgeList } from '../../components/damgeList'
import damge from '../fixtures/damge'

test('Testing should DamgeList component render currectly' , () => {
    const wrapper = shallow(<DamgeList damge = {damge}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Testing should DamgeList component render currectly if there are no data', () => {
    const wrapper = shallow(<DamgeList damge = {[]}/>)
    expect(wrapper).toMatchSnapshot()
})