//  CHARACTERS REDUCER
import actionIds from 'actions/actionIds';
const {ADD_CHARACTER, REMOVE_CHARACTER, EDIT_CHARACTER, COMPLETE_CHARACTER} = actionIds;
const charactersReducerDefaultState = [];

export default ( state = charactersReducerDefaultState, action ) => {
    switch (action.type) {
        case ADD_CHARACTER:
            return [
                ...state,
                action.character
            ];
        case REMOVE_CHARACTER:
            return state.filter(({ id }) => {
                return id !== action.id;
            });
        case EDIT_CHARACTER:
            return state.map((character) => {
                if (character.id ===  action.id) {
                    return {
                        ...character,
                        ...action.updates
                    }
                } else {
                    return character;
                }
            });
        case COMPLETE_CHARACTER:
            return state.map((character) => {
                if (character.id ===  action.id) {
                    let {inProgressStep, ...rest} = character;
                    console.log('rest'+rest);
                    return rest;
                } else {
                    return character;
                }
            });
        default:
            return state;
    }
};