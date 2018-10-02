/* global jest expect */
import React from 'react';
import { shallow } from 'enzyme';
import EquipForm from '../../components/EquipForm';
import characters from '../fixtures/characters';

test('should render equip form without props (character not found)', () => {
    const wrapper = shallow(<EquipForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render equip form with props', () => {
    const wrapper = shallow(<EquipForm currentCharacter={characters[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should call onSubmit prop for valid submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<EquipForm currentCharacter={characters[1]} onSubmit={onSubmitSpy} />);
    const value = [ 0, 1, 2 ];
    wrapper.setState({ ids: value });
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(onSubmitSpy).toHaveBeenLastCalledWith(
        characters[1].id,
        {
            equipment: value,
            gold: characters[1].gold
        }
    );
});