import React from 'react';
import { connect } from 'react-redux';
import { editCharacter } from '../actions/characters';
import SpellForm from './SpellForm';

const NewSpellPage = (props) => (
    <div>
        <SpellForm
            onSubmit={(id, character) => {
                props.dispatch(editCharacter(id, character));
                props.history.push('/new-char-step-4');
            }}
        />
    </div>    
);

export default connect()(NewSpellPage);