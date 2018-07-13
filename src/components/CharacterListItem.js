import React from 'react';
import { Link } from 'react-router-dom';

const CharacterListItem = ({ name, charClass, race, id }) => (
    <div>
        <h2>{name}</h2>
        <p>{race} - {charClass}</p>
        <Link to={`/view-char/${id}`}>View Character</Link>
    </div>    
);

export default CharacterListItem;
