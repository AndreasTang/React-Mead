import React from 'react'
import { shallow } from 'enzyme'
import Damge from '../../components/damge'

test('Testing should NotFoundPage render currectly', () => {
    const wrapper = shallow(<Damge />)
    expect(wrapper).toMatchSnapshot()
})