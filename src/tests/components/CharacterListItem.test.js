/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import { CharacterListItem } from '../../components/CharacterListItem';
import characters from '../fixtures/characters';

test('should render CharacterListItem with a character that has inProgressStep key', () => {
    const wrapper = shallow(<CharacterListItem {...characters[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render CharacterListItem with a character that does not have inProgressStep key', () => {
    let {inProgressStep, ...rest} = characters[0];
    const wrapper = shallow(<CharacterListItem {...rest} />);
    expect(wrapper).toMatchSnapshot();
});