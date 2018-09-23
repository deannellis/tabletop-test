/* global expect */
// CHARACTERS REDUCERS TEST

import charactersReducer from '../../reducers/characters';
import actionIds from '../../actions/actionIds';
import characters from '../fixtures/characters';

const {ADD_CHARACTER, REMOVE_CHARACTER, EDIT_CHARACTER, COMPLETE_CHARACTER} = actionIds;

const character = {
    abilities: {
        charisma: 5,
        constitution: 10,
        dexterity: 10,
        intelligence: 9,
        strength: 9,
        wisdom: 12
    },
    charClass: 'thief',
    description: 'a retro-style hang glider',
    equipment: [ 3 ],
    gold: 95,
    hp: 4,
    id: '632501b0-7703-4eac-954f-03a22f2e8146',
    name: 'Mr. Freebus',
    race: 'halfling',
    xp: 0
}

test('should set default state', () => {
    const state = charactersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove character by id', () => {
    const action = {
        type: REMOVE_CHARACTER,
        id: characters[0].id
    };
    const state = charactersReducer(characters, action);
    expect(state).toEqual([characters[1], characters[2]]);
});

test('should not remove character if id is not found', () => {
    const action = {
        type: REMOVE_CHARACTER,
        id: 'nonexistant-id'
    };
    const state = charactersReducer(characters, action);
    expect(state).toEqual(characters);
});

test('should add a character', () => {
    const action = {
        type: ADD_CHARACTER,
        character
    }
    const state = charactersReducer(characters, action);
    expect(state).toEqual([...characters, character]);
});

test('should edit a character by id', () => {
    const description = 'you better give him what he needs';
    const action = {
        type: EDIT_CHARACTER,
        id: characters[2].id,
        updates: {
            description
        }
    }
    const state = charactersReducer(characters, action);
    expect(state[2].description).toBe(description);
});

test('should not edit character if not found', () => {
    const action = {
        type: EDIT_CHARACTER,
        id: 'nonexistant-id',
        updates: {
            name: 'Herbie Rubbit'
        }
    }
    const state = charactersReducer(characters, action);
    expect(state).toEqual(characters);
});

test('should complete character (remove inProgressStep key) by id', () => {
    const action = {
        type: COMPLETE_CHARACTER,
        id: characters[0].id
    };
    const state = charactersReducer(characters, action);
    expect(state[0].hasOwnProperty('inProgressStep')).toBeFalsy();
});

test('should not complete character if id is not found', () => {
    const action = {
        type: COMPLETE_CHARACTER,
        id: 'nonexistant-id'
    }
    const state = charactersReducer(characters, action);
    expect(state).toEqual(characters);
});