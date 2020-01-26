import React from 'react';
import { shallow } from 'enzyme'
import Loader from './Loader'

describe('Loader', () => {
  it('should render loader correctly ', () => {
    const component = shallow(<Loader />)
    expect(component).toMatchSnapshot()
  })
})