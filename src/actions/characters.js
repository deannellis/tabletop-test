// CHARACTERS ACTIONS

// ADD_CHARACTER
import actionIds from 'actions/actionIds';
const {ADD_CHARACTER, REMOVE_CHARACTER, EDIT_CHARACTER, COMPLETE_CHARACTER} = actionIds;

export const addCharacter = (
    {
        id = '',
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
        equipment = [],
        inProgressStep = 2
    } = {}
) => ({
    type: ADD_CHARACTER,
    character: {
        id,
        abilities,
        race,
        charClass,
        hp,
        xp,
        name,
        description,
        gold,
        equipment,
        inProgressStep
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

// COMPLETE_CHARACTER
export const completeCharacter = ({ id } = {}) => ({
    type: COMPLETE_CHARACTER,
    id
});
