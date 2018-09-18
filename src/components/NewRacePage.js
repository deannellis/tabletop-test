import React from 'react';
import { connect } from 'react-redux';
import RaceForm from './RaceForm';
import { editCharacter } from '../actions/characters';

const NewRacePage = (props) => (
    <div>
        <RaceForm 
            currentCharacter={props.currentCharacter}
            onSubmit={(id, character) => {
                props.dispatch(editCharacter(id, character));
                props.history.push(`/new-char-step-3/${id}`);
            }}
        />
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        currentCharacter: state.characters.find((character) => character.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(NewRacePage);