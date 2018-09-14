import { createStore, combineReducers } from 'redux';
import charactersReducer from '../reducers/characters';

export default () => {
    const store = createStore(
        combineReducers({
            characters: charactersReducer
        }),
        // Connects Store to Redux dev tools \/ 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
    return store;
};