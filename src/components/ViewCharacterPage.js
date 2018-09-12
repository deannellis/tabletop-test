import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import IdListItem from './IdListItem';
import weapons from '../objects/weapons';

const ViewCharacterPage = (props) => {
    // const charEquipment = props.character.equipment;
    // const charWeapons = weapons.filter( (weapon) => {
    //     for(let i = 0; i < charEquipment.length + 1; i++) {
    //         console.log(i);
    //         console.log(charEquipment[i]);
    //         console.log(weapon.id);
    //         return charEquipment[i] === weapon.id;
    //     }
    // });
    // var charWeapons = weapons.filter(function(element) {
    //   var wpns = element.id.split(' ');
       
    //     return wpns.filter(function(wpn) {
    //       return charEquipment.indexOf(wpn) > -1;
    //     }).length === charEquipment.length;
    // });
    // console.log('weapons:' + charWeapons[0]);
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
            <div>
                Character not found
                <div>
                    <Link to="/">Home</Link>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
    character: state.characters.find((character) => character.id === props.match.params.id)
});

export default connect(mapStateToProps)(ViewCharacterPage);