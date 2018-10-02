/* global jest expect */
import React from 'react';
import { shallow } from 'enzyme';
import { ViewCharacterPage } from '../../components/ViewCharacterPage';
import characters from '../fixtures/characters';

test('should render view character page without props', () => {
    const wrapper = shallow(<ViewCharacterPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should render view character page with props', () => {
    const wrapper = shallow(<ViewCharacterPage character={characters[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call handleRemoveCharacter', () => {
    const handleRemoveCharacter = jest.fn();
    const history = { push: jest.fn() }
    const wrapper = shallow(<ViewCharacterPage 
                                handleRemoveCharacter={handleRemoveCharacter}
                                character={characters[0]}
                                history={history}
                            />);
    wrapper.find('button').simulate('click');
    expect(handleRemoveCharacter).toHaveBeenLastCalledWith(characters[0].id);
    expect(history.push).toHaveBeenLastCalledWith('/');
});