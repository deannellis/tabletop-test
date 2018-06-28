import React from 'react';
import { connect } from 'react-redux';
import RaceForm from './RaceForm';
import { editCharacter } from '../actions/characters';

const NewRacePage = (props) => (
    <div>
        <RaceForm 
            onSubmit={(id, character) => {
                props.dispatch(editCharacter(id, character));
                props.history.push('/new-char-step-3');
            }}
        />
    </div>
);

export default connect()(NewRacePage);