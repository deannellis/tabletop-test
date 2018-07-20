import React from 'react';
import { connect } from 'react-redux';
import EquipForm from './EquipForm';
import { editCharacter } from '../actions/characters';

const NewEquipPage = (props) => (
    <div>
        Create Character Step 5
        <EquipForm 
            onSubmit={(id, character) => {
                props.dispatch(editCharacter(id, character));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(NewEquipPage);