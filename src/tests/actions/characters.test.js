/* global expect */
// CHARACTERS ACTIONS TESTS 

import { addCharacter, editCharacter, removeCharacter, completeCharacter } from '../../actions/characters';
import actionIds from '../../actions/actionIds';
const {ADD_CHARACTER, REMOVE_CHARACTER, EDIT_CHARACTER, COMPLETE_CHARACTER} = actionIds;

test('should setup remove character action object', () => {
    const action = removeCharacter({ id: 'abc123' });
    expect(action).toEqual({
        type: REMOVE_CHARACTER,
        id: 'abc123'
    });
});

test('should setup edit character action object', () => {
    const action = editCharacter('abc123', {name: 'Bone Mahone'});
    expect(action).toEqual({
        type: EDIT_CHARACTER,
        id: 'abc123',
        updates: {
            name: 'Bone Mahone'
        }
    });
});

test('should set up add character action object with provided values', () => {
    const characterData = {
        id: 'abc123',
        abilities: {
            strength: 9,
            intelligence: 9,
            wisdom: 9,
            dexterity: 9,
            constitution: 9,
            charisma: 9
        }, 
        race: 'human', 
        charClass: 'fighter', 
        hp: 1, 
        xp: 0,
        name: 'Dugan',
        description: 'a real nice guy',
        gold: 50,
        equipment: [],
        inProgressStep: 2
    }
    const action = addCharacter(characterData);
    expect(action).toEqual({
        type: ADD_CHARACTER,
        character: characterData
    });
});

test('should set up add character action object with default values', () => {
    const action = addCharacter();
    expect(action).toEqual({
        type: ADD_CHARACTER,
        character: {
            id: '',
        abilities: {
            strength: 9,
            intelligence: 9,
            wisdom: 9,
            dexterity: 9,
            constitution: 9,
            charisma: 9
        }, 
        race: '', 
        charClass: '', 
        hp: 0, 
        xp: 0,
        name: '',
        description: '',
        gold: 0,
        equipment: [],
        inProgressStep: 2
        }
    });
});

test('should setup complete character action object', () => {
    const action = completeCharacter({ id: 'abc123' });
    expect(action).toEqual({
        type: COMPLETE_CHARACTER,
        id: 'abc123'
    });
});