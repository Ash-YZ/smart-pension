import React from 'react';
import { shallow } from 'enzyme'
import Score from './Score'

const testProps = {
  score: [1, 2, 3]
}

describe('Score', () => {
  it('should render control correctly ', () => {
    const component = shallow(<Score {...testProps} />)
    expect(component).toMatchSnapshot()
  })
})