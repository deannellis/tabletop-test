import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_CHARACTER
const addCharacter = (
    {
        abilities = {
            strength: 0,
            intelligence: 0,
            wisdom: 0,
            dexterity: 0,
            constitution: 0,
            charisma: 0
        }, 
        race = '', 
        charClass = '', 
        hp = 0, 
        xp = 0,
        name = '',
        description = ''
    } = {}
) => ({
    type: 'ADD_CHARACTER',
    character: {
        id: uuid(),
        abilities,
        race,
        charClass,
        hp,
        xp,
        name,
        description
    }
});

// REMOVE_CHARACTER

const removeCharacter = ({ id } = {}) => ({
    type: 'REMOVE_CHARACTER',
    id
});

// EDIT_CHARACTER
const editCharacter = (id, updates) => ({
    type: 'EDIT_CHARACTER',
    id,
    updates
});

// SET_ABILITIES
// SET_RACE
// SET_CLASS
// 

const demoState = {
    characters: [{
        id: 'sjvdsjlbdvslbjdv',
        abilities: {
            strength: 9,
            intelligence: 9,
            wisdom: 9,
            dexterity: 9,
            constitution: 9,
            charisma: 9
        },
        race: 'Elf',
        charClass: 'Fighter',
        hp: 5,
        xp: 0,
        name: 'Bob',
        description: 'Bad Boy',
        gold: 10,
        items: [
            {
                type: 'weapon',
                name: 'bow',
                attackBonus: '+5',
                damage: 6,
                value: 50
            }
        ]
    }]
};

const simpleDemoState = {
    characters: [{
        id: 'sjvdsjlbdvslbjdv',
        abilities: {
            strength: 9,
            intelligence: 9,
            wisdom: 9,
            dexterity: 9,
            constitution: 9,
            charisma: 9
        },
        race: 'Elf',
        charClass: 'Fighter',
        hp: 5,
        xp: 0,
        name: 'Bob',
        description: 'Bad Boy'
    }]
};

// Characters Reducer

const charactersReducerDefaultState = [];

const charactersReducer = ( state = charactersReducerDefaultState, action ) => {
    switch (action.type) {
        case 'ADD_CHARACTER':
            return [
                ...state,
                action.character
            ];
        case 'REMOVE_CHARACTER':
            return state.filter(({ id }) => {
                return id !== action.id;
            });
        case 'EDIT_CHARACTER':
            return state.map((character) => {
                if (character.id ===  action.id) {
                    return {
                        ...character,
                        ...action.updates
                    }
                } else {
                    return 
                }
            });
        default:
            return state;
    }
};

// Store Creation

const store = createStore(
    combineReducers({
        characters: charactersReducer
    })    
);

store.subscribe(() => {
    console.log(store.getState());
});

const charOne = store.dispatch(addCharacter({ race: 'Elf', charClass: 'Fighter' }));
const charTwo = store.dispatch(addCharacter({ name: 'Moby', charClass: 'Magic-User' }));

store.dispatch(removeCharacter({ id: charOne.character.id }));

store.dispatch(editCharacter(charTwo.character.id, { name: 'Barfunk' }));
