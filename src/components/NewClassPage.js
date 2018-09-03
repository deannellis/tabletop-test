import React from 'react';
import { connect } from 'react-redux';
import ClassForm from './ClassForm';
import { editCharacter } from '../actions/characters';

const NewClassPage = (props) => (
    <div>
        <ClassForm 
            onSubmit={(id, character) => {
                props.dispatch(editCharacter(id, character));
                if(character.charClass == 'magic-user') {
                    props.history.push('/new-char-step-4.5');
                } else {
                    props.history.push('/new-char-step-4');
                }
            }}
        />
    </div>
);

export default connect()(NewClassPage);