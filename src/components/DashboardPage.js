import React from 'react';
import { Link } from 'react-router-dom';
import CharacterList from './CharacterList';

const DashboardPage = () => (
    <div>
        <CharacterList />
        <Link to="/new-char-step-1">Create New Character</Link>
        <Link to="/view-char">View Character</Link>
    </div>
);

export default DashboardPage;