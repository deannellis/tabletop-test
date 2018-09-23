/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import { CharacterList } from '../../components/CharacterList';
import characters from '../fixtures/characters';

test('should render CharacterList with characters', () => {
    const wrapper = shallow(<CharacterList characters={characters} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render CharacterList with no characters message', () => {
    const wrapper = shallow(<CharacterList characters={[]} />);
    expect(wrapper).toMatchSnapshot();
});