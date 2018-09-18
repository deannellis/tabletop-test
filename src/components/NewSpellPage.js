import React from 'react';
import { connect } from 'react-redux';
import { editCharacter } from '../actions/characters';
import SpellForm from './SpellForm';

const NewSpellPage = (props) => (
    <div>
        <SpellForm
            currentCharacter={props.currentCharacter}
            onSubmit={(id, character) => {
                props.dispatch(editCharacter(id, character));
                props.history.push(`/new-char-step-4/${id}`);
            }}
        />
    </div>    
);

const mapStateToProps = (state, props) => {
    return {
        currentCharacter: state.characters.find((character) => character.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(NewSpellPage);