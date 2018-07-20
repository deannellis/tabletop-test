import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ViewCharacterPage = (props) => {
    return (
        <div>
            <h1>{props.character.name}</h1>
            {props.character.description && <p>{props.character.description}</p>}
            <p>{props.character.race} - {props.character.charClass}</p>
            <h2>Ability Scores</h2>
            <p>{`Strength: ${props.character.abilities.strength}`}</p>
            <p>{`Intelligence: ${props.character.abilities.intelligence}`}</p>
            <p>{`Wisdom: ${props.character.abilities.wisdom}`}</p>
            <p>{`Dexterity: ${props.character.abilities.dexterity}`}</p>
            <p>{`Charisma: ${props.character.abilities.charisma}`}</p>
            <p>{`Constitution: ${props.character.abilities.constitution}`}</p>
            <p>{`HP: ${props.character.hp}`}</p>
            <p>{`XP: ${props.character.xp}`}</p>
            <p>{`Gold: ${props.character.gold}`}</p>
            <h3>Equipmunk:</h3>
            <div>
                {props.character.equipment.map(weapon => (
                  <div className="station" key={weapon}>{weapon}</div>
                ))}
            </div>
            <Link to="/">Back</Link>
        </div>    
    );
};

const mapStateToProps = (state, props) => ({
    character: state.characters.find((character) => character.id === props.match.params.id)
});

export default connect(mapStateToProps)(ViewCharacterPage);