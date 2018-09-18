import React from 'react';
import { connect } from 'react-redux';
import DetailsForm from './DetailsForm';
import { editCharacter } from '../actions/characters';

const NewDetailsPage = (props) => (
    <div>
        <DetailsForm
            currentCharacter={props.currentCharacter}
            onSubmit={(id, character) => {
                props.dispatch(editCharacter(id, character));
                props.history.push(`/new-char-step-5/${id}`);
            }}
        />
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        currentCharacter: state.characters.find((character) => character.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(NewDetailsPage);