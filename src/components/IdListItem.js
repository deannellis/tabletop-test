import React from 'react';
import weapons from '../objects/weapons';
import spells from '../objects/spells';

export default (props) => {
    
    const objType = props.obj;
    
    // if(this.props.obj == "weapons") {
    //     objType = 
    // }
    
    // const item = weapons.filter((weapon) => {
    //     return weapon.id === props.id
    // });
    
    // const spell = spells.filter((spell) => {
    //     return spell.id === props.id
    // });
    
    const item = weapons[props.id];
    console.log(props.id);
    
    const {name, damage, price, weight, range} = item;
    
    const spell = spells[props.id];
    
    return (
        <div>
        {objType == 'weapons' && 
            <div>
                <h2>{name}</h2>
                <p>damage: {damage}</p>
                <p>price: {price/100}gp</p>
                <p>weight: {weight}</p>
                <p>{range.length && 'ranged'}</p>
            </div>
        }
        {objType == 'spells' && 
            <div>
                <p>{spell.name}</p>
            </div>
        }
        </div>
    );
};