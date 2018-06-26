import React from 'react';
import { connect } from 'react-redux';
import AbilitiesForm from './AbilitiesForm';
import { addCharacter } from '../actions/characters';

const NewAbilitiesPage = (props) => (
    <div>
        <h1>Roll for Abilites</h1>
        <AbilitiesForm
            onSubmit={(character) => {
                props.dispatch(addCharacter(character));
                const characters = props.characters;
                const lastCharacter = characters[characters.length - 1];
                const lastCharacterId = lastCharacter.id;
                props.history.push(`/new-char-step-2/${lastCharacterId}`);
            }}
        />
    </div>
);

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    };
}

export default connect(mapStateToProps)(NewAbilitiesPage);