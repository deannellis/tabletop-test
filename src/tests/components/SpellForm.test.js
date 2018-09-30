/* global jest expect */
import React from 'react';
import { shallow } from 'enzyme';
import SpellForm from '../../components/SpellForm';
import characters from '../fixtures/characters';

test('should render class form without props (character not found)', () => {
    const wrapper = shallow(<SpellForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render spell form with props', () => {
    const wrapper = shallow(<SpellForm currentCharacter={characters[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid submission', () => {
    const wrapper = shallow(<SpellForm currentCharacter={characters[1]}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should call onSubmit prop for valid submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<SpellForm currentCharacter={characters[1]} onSubmit={onSubmitSpy} />);
    const value = 0;
    wrapper.setState({ selectedOption: value });
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith(
        characters[1].id,
        {
            spells: [value],
            inProgressStep: 5
        }
    );
});