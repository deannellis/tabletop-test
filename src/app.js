import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addCharacter } from './actions/characters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addCharacter({ race: 'Elf', charClass: 'Fighter', name: 'Dugan' }));
store.dispatch(addCharacter({ race: 'Human', charClass: 'Magic-User', name: 'Barfunk' }));

console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));