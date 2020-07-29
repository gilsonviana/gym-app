import React from 'react'
import renderer from 'react-test-renderer'

import Launch from '@screens/Launch'

describe('<Launch />', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<Launch />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})