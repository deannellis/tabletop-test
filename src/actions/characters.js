import uuid from 'uuid';

// ADD_CHARACTER
export const addCharacter = (
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

export const removeCharacter = ({ id } = {}) => ({
    type: 'REMOVE_CHARACTER',
    id
});

// EDIT_CHARACTER
export const editCharacter = (id, updates) => ({
    type: 'EDIT_CHARACTER',
    id,
    updates
});

