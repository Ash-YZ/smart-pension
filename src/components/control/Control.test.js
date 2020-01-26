import React from 'react';
import { shallow } from 'enzyme'
import Control from './Control'

const submitFn = jest.fn()
const changeFn = jest.fn

const testProps = {
  score: [0, 1],
  newGameHandler: submitFn,
  switchModeHandler: changeFn,
  submitButtonLabel: 'Submit'

}

const component = shallow(<Control {...testProps} />)

describe('Control', () => {
  it('should render control correctly ', () => {
    expect(component).toMatchSnapshot()
  })

  it('should trigger submitFn when the submit button is clicked', () => {
    component.find('.ctrl-button').first().simulate('click')
    expect(submitFn).toHaveBeenCalled()
  })
})