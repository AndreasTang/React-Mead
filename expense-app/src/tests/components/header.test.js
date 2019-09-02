import React from 'react'
import Header from '../../components/header'
import { shallow } from 'enzyme'

test('Testing should Header component render currectly', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
//    const renderer = new ReactShallowRenderer()
//    renderer.render(<Header />)
//    expect(renderer.getRenderOutput()).toMatchSnapshot()
})