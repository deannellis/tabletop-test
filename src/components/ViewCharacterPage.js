import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import IdListItem from './IdListItem';
import weapons from '../objects/weapons';
import NotFoundPage from './NotFoundPage';

const ViewCharacterPage = (props) => {
    if(props.character !== undefined) {
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
                {props.character.hasOwnProperty("spells") && 
                    <div>
                        <h3>Spells:</h3>
                        <div>
                            {props.character.spells.map((id) => {
                                return <IdListItem 
                                            key={id} 
                                            id={id}
                                            obj={'spells'}
                                        />
                            })}
                        </div>
                    </div>
                }
                <h3>Equipmunk:</h3>
                <div>
                    {props.character.equipment.map((id) => {
                        return <IdListItem 
                                    key={id} 
                                    id={id}
                                    obj={'weapons'}
                                />
                    })}
                </div>
                <Link to="/">Back</Link>
            </div>    
        );
    } else {
        return (
            <NotFoundPage />
        );
    }
};

const mapStateToProps = (state, props) => ({
    character: state.characters.find((character) => character.id === props.match.params.id)
});

export default connect(mapStateToProps)(ViewCharacterPage);