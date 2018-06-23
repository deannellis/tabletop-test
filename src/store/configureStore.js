import { createStore, combineReducers } from 'redux';
import charactersReducer from '../reducers/characters';

export default () => {
    const store = createStore(
        combineReducers({
            characters: charactersReducer
        })    
    );
    
    return store;
};