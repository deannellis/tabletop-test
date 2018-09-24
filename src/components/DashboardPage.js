import React from 'react';
import { Link } from 'react-router-dom';
import CharacterList from './CharacterList';

export const DashboardPage = () => (
    <div>
        <CharacterList />
        <div>
            <Link to="/new-char-step-1">Create New Character</Link>
        </div>
    </div>
);

export default DashboardPage;