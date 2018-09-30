/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import ClassForm from '../../components/ClassForm';
import characters from '../fixtures/characters';

test('should render class form without props (character not found)', () => {
    const wrapper = shallow(<ClassForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render class form with dwarf (magic-user disabled)', () => {
    const wrapper = shallow(<ClassForm currentCharacter={characters[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render class form with halfling (figther disabled)', () => {
    const wrapper = shallow(<ClassForm currentCharacter={characters[2]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render class form with low wisdom (cleric disabled)', () => {
    const wrapper = shallow(<ClassForm currentCharacter={characters[3]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render class form with low strength (figther disabled)', () => {
    const wrapper = shallow(<ClassForm currentCharacter={characters[4]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render class form with low intelligence (magic-user disabled)', () => {
    const wrapper = shallow(<ClassForm currentCharacter={characters[5]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render class form with low dexterity (thief disabled)', () => {
    const wrapper = shallow(<ClassForm currentCharacter={characters[6]}/>);
    expect(wrapper).toMatchSnapshot();
});