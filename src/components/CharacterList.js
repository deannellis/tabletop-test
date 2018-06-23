import React from 'react';
import { connect } from 'react-redux';
import CharacterListItem from './CharacterListItem';

const CharacterList = (props) => (
    <div>
        <h1>Character List</h1>
        {props.characters.map((character) => {
            return <CharacterListItem key={character.id} {...character} />
        })}
    </div>    
);

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    };
};

export default connect(mapStateToProps)(CharacterList);
