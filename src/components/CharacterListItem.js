import React from 'react';

const CharacterListItem = ({ name, charClass, race }) => (
    <div>
        <h2>{name}</h2>
        <p>{race} - {charClass}</p>
    </div>    
);

export default CharacterListItem;
