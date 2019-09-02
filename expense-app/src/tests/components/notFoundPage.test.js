import React from 'react'
import { shallow } from 'enzyme'
import NotFoundPage from '../../components/notFoundPage'

test('Testing should NotFoundPage render currectly', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot()
})