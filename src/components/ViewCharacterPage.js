import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import IdListItem from './IdListItem';

const ViewCharacterPage = (props) => {
    const charEquipment = props.character.equipment;
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
    // console.log('weapons:' + charWeapons);
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
                {charEquipment.map((id) => {
                    return <IdListItem 
                                key={id} 
                                id={id}
                            />
                })}
            </div>
            <Link to="/">Back</Link>
        </div>    
    );
};

const mapStateToProps = (state, props) => ({
    character: state.characters.find((character) => character.id === props.match.params.id)
});

export default connect(mapStateToProps)(ViewCharacterPage);