import React from 'react';
import { connect } from 'react-redux';
import DetailsForm from './DetailsForm';
import { editCharacter } from '../actions/characters';

const NewDetailsPage = (props) => (
    <div>
        <DetailsForm 
            onSubmit={(id, character) => {
                props.dispatch(editCharacter(id, character));
                props.history.push('/new-char-step-5');
            }}
        />
    </div>
);

export default connect()(NewDetailsPage);