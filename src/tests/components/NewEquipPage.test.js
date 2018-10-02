/* global jest expect */
import React from 'react';
import { shallow } from 'enzyme';
import { NewEquipPage } from '../../components/NewEquipPage';
import characters from '../fixtures/characters';

test('should render NewEquipPage correctly', () => {
    const onSubmit = jest.fn();
    const history = { push: jest.fn() }
    const wrapper = shallow(<NewEquipPage onSubmit={onSubmit} history={history} />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    const onSubmit = jest.fn();
    const history = { push: jest.fn() }
    const wrapper = shallow(<NewEquipPage onSubmit={onSubmit} history={history} />);
    wrapper.find('EquipForm').prop('onSubmit')(characters[1].id, characters[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(characters[1].id, characters[1]);
});