/* global jest expect */
import React from 'react';
import { shallow } from 'enzyme';
import { NewRacePage } from '../../components/NewRacePage';
import characters from '../fixtures/characters';

test('should render NewRacePage correctly', () => {
    const onSubmit = jest.fn();
    const history = { push: jest.fn() }
    const wrapper = shallow(<NewRacePage onSubmit={onSubmit} history={history} />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    const onSubmit = jest.fn();
    const history = { push: jest.fn() }
    const wrapper = shallow(<NewRacePage onSubmit={onSubmit} history={history} />);
    wrapper.find('RaceForm').prop('onSubmit')(characters[1].id, characters[1]);
    expect(history.push).toHaveBeenLastCalledWith(`/new-char-step-3/${characters[1].id}`);
    expect(onSubmit).toHaveBeenLastCalledWith(characters[1].id, characters[1]);
});