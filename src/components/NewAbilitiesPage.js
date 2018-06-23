import React from 'react';
import { Link } from 'react-router-dom';
import AbilitiesForm from './AbilitiesForm';

const NewAbilitiesPage = () => (
    <div>
        <h1>Roll for Abilites</h1>
        <AbilitiesForm />
        <Link to="new-char-step-2">Step 2</Link>
    </div>
);

export default NewAbilitiesPage;