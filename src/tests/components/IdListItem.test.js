/* global jest expect */
import React from 'react';
import { shallow } from 'enzyme';
import IdListItem from '../../components/IdListItem';
import weapons from '../../objects/weapons';
import spells from '../../objects/spells';

test('should render id list item with spell props', () => {
    const wrapper = shallow(<IdListItem id="0" obj="spells" />);
    expect(wrapper).toMatchSnapshot();
});

test('should render id list item with weapon props', () => {
    const wrapper = shallow(<IdListItem id="0" obj="weapons" />);
    expect(wrapper).toMatchSnapshot();
});