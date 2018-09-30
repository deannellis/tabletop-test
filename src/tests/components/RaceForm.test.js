/* global jest expect */
import React from 'react';
import { shallow } from 'enzyme';
import RaceForm from '../../components/RaceForm';
import characters from '../fixtures/characters';

test('should render race form without props (character not found)', () => {
    const wrapper = shallow(<RaceForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render race form with props (all options enabled)', () => {
    const wrapper = shallow(<RaceForm currentCharacter={characters[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render race form with low constitution (dwarf disabled)', () => {
    const wrapper = shallow(<RaceForm currentCharacter={characters[3]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render race form with low intelligence (elf disabled)', () => {
    const wrapper = shallow(<RaceForm currentCharacter={characters[5]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render race form with low dexterity (halfling disabled)', () => {
    const wrapper = shallow(<RaceForm currentCharacter={characters[6]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid submission', () => {
    const wrapper = shallow(<RaceForm currentCharacter={characters[1]}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set selected option on change', () => {
    const wrapper = shallow(<RaceForm currentCharacter={characters[1]}/>);
    const value = "dwarf";
    wrapper.find('input').at(0).simulate('change', {
       target: { value }
    });
    expect(wrapper.state('selectedOption')).toBe(value);
});

test('should call onSubmit prop for valid submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<RaceForm currentCharacter={characters[1]} onSubmit={onSubmitSpy} />);
    const value = "dwarf";
    wrapper.find('input').at(0).simulate('change', {
       target: { value }
    });
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith(
        characters[1].id,
        {
            race: value,
            inProgressStep: 3
        }
    );
});