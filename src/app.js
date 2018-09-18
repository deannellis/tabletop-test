import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addCharacter } from './actions/characters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import uuid from 'uuid';

const store = configureStore();

store.dispatch(addCharacter({ id: uuid(), race: 'elf', charClass: 'fighter', name: 'Dugan', equipment: ['0','1','2','3']}));
store.dispatch(addCharacter({ id: uuid(), race: 'human', charClass: 'magic-User', name: 'Barfunk' }));

console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));