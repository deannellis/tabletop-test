/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import SpellListItem from '../../components/SpellListItem';
import spells from '../../objects/spells';

test('should render spell list item with cleric prop', () => {
    const wrapper = shallow(<SpellListItem spellType={'cleric'} {...spells[5] } />);
    expect(wrapper).toMatchSnapshot();
});

test('should render spell list item with magic-user prop', () => {
    const wrapper = shallow(<SpellListItem spellType={'magic-user'} {...spells[0] } />);
    expect(wrapper).toMatchSnapshot();
});

test('should render spell list item regardless of spellType prop', () => {
    const wrapper = shallow(<SpellListItem spellType={null} {...spells[1] } />);
    expect(wrapper).toMatchSnapshot();
});
