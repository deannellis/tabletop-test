import uuid from 'uuid';

// ADD_CHARACTER
import actionIds from 'actions/actionIds';
const {ADD_CHARACTER, REMOVE_CHARACTER, EDIT_CHARACTER} = actionIds;

export const addCharacter = (
    {
        abilities = {
            strength: 9,
            intelligence: 9,
            wisdom: 9,
            dexterity: 9,
            constitution: 9,
            charisma: 9
        }, 
        race = '', 
        charClass = '', 
        hp = 0, 
        xp = 0,
        name = '',
        description = '',
        gold = 0,
        equipment = []
    } = {}
) => ({
    type: ADD_CHARACTER,
    character: {
        id: uuid(),
        abilities,
        race,
        charClass,
        hp,
        xp,
        name,
        description,
        gold,
        equipment
    }
});

// REMOVE_CHARACTER

export const removeCharacter = ({ id } = {}) => ({
    type: REMOVE_CHARACTER,
    id
});

// EDIT_CHARACTER
export const editCharacter = (id, updates) => ({
    type: EDIT_CHARACTER,
    id,
    updates
});

