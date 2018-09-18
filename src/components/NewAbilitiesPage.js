import React from 'react';
import { connect } from 'react-redux';
import AbilitiesForm from './AbilitiesForm';
import { addCharacter } from '../actions/characters';

const NewAbilitiesPage = (props) => {
    
    return (
        <div>
            <h1>Roll for Abilites</h1>
            <AbilitiesForm
                onSubmit={(character) => {
                    props.dispatch(addCharacter(character));
                    props.history.push(`/new-char-step-2/${character.id}`);
                }}
            />
        </div>
    );
};

export default connect()(NewAbilitiesPage);