/* global jest expect */
import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../../components/Checkbox';

test('should render checkbox with no props', () => {
    const wrapper = shallow(<Checkbox />);
    expect(wrapper).toMatchSnapshot();
});

test('should render checkbox with props', () => {
    const wrapper = shallow(<Checkbox label="Test Label" isDisabled={true} />);
    expect(wrapper).toMatchSnapshot();
});