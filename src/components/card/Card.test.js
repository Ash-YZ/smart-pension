import React from 'react';
import { shallow } from 'enzyme'
import Card from './Card'

const testProps = {
  gameMode: '',
  card: {
    name: 'Person 1',
    mass: '100'
  },
}

describe('Card', () => {
  it('should render "people" mode correctly ', () => {
    testProps.gameMode = 'people'
    const component = shallow(<Card {...testProps} />)
    expect(component).toMatchSnapshot()
  })

  it('should render "starship" mode correctly ', () => {
    testProps.gameMode = 'starship'
    const component = shallow(<Card {...testProps} />)
    expect(component).toMatchSnapshot()
  })

  it('should render empty card correctly ', () => {
    testProps.gameMode = 'people'
    testProps.card = null;
    const component = shallow(<Card {...testProps} />)
    expect(component).toMatchSnapshot()
  })
})