/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import WeaponListItem from '../../components/WeaponListItem';
import weapons from '../../objects/weapons';

test('should render weapon that can be purchased', () => {
    const wrapper = shallow(<WeaponListItem { ...weapons[0] } currentGold={450} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render weapon that cannot be purchased (checkbox disabled)', () => {
    const wrapper = shallow(<WeaponListItem { ...weapons[0] } currentGold={0} />);
    expect(wrapper).toMatchSnapshot();
});