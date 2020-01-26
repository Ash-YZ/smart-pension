import React from 'react';
import { shallow } from 'enzyme'
import Title from './Title'

describe('Title', () => {
  it('should render main title correctly ', () => {
    const component = shallow(<Title title='Test Title' isMain />)
    expect(component).toMatchSnapshot()
  })

  it('should render sub-title correctly ', () => {
    const component = shallow(<Title title='Test Title' />)
    expect(component).toMatchSnapshot()
  })
})