import React from 'react';
import { Link } from 'react-router-dom';

export const CharacterListItem = ({ name, charClass, race, id, inProgressStep }) => (
    <div>
        <h2>{name}</h2>
        {race && <p>{race} {charClass && ` - ${charClass}`}</p>}
        {inProgressStep ? 
            <Link to={`/new-char-step-${inProgressStep}/${id}`}>Finish Character</Link>
        : 
            <Link to={`/view-char/${id}`}>View Character</Link>
        }
    </div>    
);

export default CharacterListItem;
