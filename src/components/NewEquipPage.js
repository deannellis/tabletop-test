import React from 'react';
import { connect } from 'react-redux';
import EquipForm from './EquipForm';
import { editCharacter, completeCharacter } from '../actions/characters';

const NewEquipPage = (props) => (
    <div>
        Create Character Step 5
        <EquipForm 
            currentCharacter={props.currentCharacter}
            onSubmit={(id, character) => {
                props.dispatch(editCharacter(id, character));
                props.dispatch(completeCharacter({id}));
                props.history.push('/');
            }}
        />
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        currentCharacter: state.characters.find((character) => character.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(NewEquipPage);