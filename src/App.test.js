import React from 'react';
import { shallow } from 'enzyme'
import App from './App';

const component = shallow(<App />)

describe('App', () => {
  it('should render control correctly ', () => {
    expect(component).toMatchSnapshot()
  })
})

