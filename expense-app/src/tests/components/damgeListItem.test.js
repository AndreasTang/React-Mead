import React from 'react'
import { shallow } from 'enzyme'
import DamgeListItem from '../../components/damgeListItem'
import damge from '../fixtures/damge'

test('Testing should DamgeListItem render currectly' , () => {
    const wrapper = shallow(<DamgeListItem {...damge[0]} />)
    expect(wrapper).toMatchSnapshot()
})