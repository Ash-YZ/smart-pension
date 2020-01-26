import React from 'react';
import { shallow } from 'enzyme'
import Switcher from './Switcher'

const changeFn = jest.fn()

const testProps = {
  gameModes: ['people', 'starship'],
  switchModeHandler: changeFn
}

const component = shallow(<Switcher {...testProps} />)

describe('Switcher', () => {
  it('should render game switcher correctly ', () => {
    expect(component).toMatchSnapshot()
  })

  it('should trigger changeFn when the switcher is used', () => {
    component.find('.switch-input').first().simulate('change')
    expect(changeFn).toHaveBeenCalled()
  })
})