/* global jest expect */
import React from 'react';
import { shallow } from 'enzyme';
import { NewClassPage } from '../../components/NewClassPage';
import characters from '../fixtures/characters';

test('should render NewClassPage correctly', () => {
    const onSubmit = jest.fn();
    const history = { push: jest.fn() }
    const wrapper = shallow(<NewClassPage onSubmit={onSubmit} history={history} />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    const onSubmit = jest.fn();
    const history = { push: jest.fn() }
    const wrapper = shallow(<NewClassPage onSubmit={onSubmit} history={history} />);
    wrapper.find('ClassForm').prop('onSubmit')(characters[1].id, characters[1]);
    expect(history.push).toHaveBeenLastCalledWith(`/new-char-step-${characters[1].inProgressStep}/${characters[1].id}`);
    expect(onSubmit).toHaveBeenLastCalledWith(characters[1].id, characters[1]);
});