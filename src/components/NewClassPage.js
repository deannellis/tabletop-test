import React from 'react';
import { connect } from 'react-redux';
import ClassForm from './ClassForm';
import { editCharacter } from '../actions/characters';

const NewClassPage = (props) => (
    <div>
        <ClassForm 
            currentCharacter={props.currentCharacter}
            onSubmit={(id, character) => {
                props.dispatch(editCharacter(id, character));
                props.history.push(`/new-char-step-${character.inProgressStep}/${id}`)
            }}
        />
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        currentCharacter: state.characters.find((character) => character.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(NewClassPage);