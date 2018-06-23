const charactersReducerDefaultState = [];

export default ( state = charactersReducerDefaultState, action ) => {
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