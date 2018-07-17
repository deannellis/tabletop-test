import React from 'react';
import { connect } from 'react-redux';
import EquipForm from './EquipForm';
import { Link } from 'react-router-dom';

const NewEquipPage = (props) => (
    <div>
        Create Character Step 5
        <EquipForm />
        <Link to="/">Finish</Link>
    </div>
);

export default connect()(NewEquipPage);