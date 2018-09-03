import React from 'react';
import weapons from '../objects/weapons';
import spells from '../objects/spells';

export default (props) => {
    
    const objType = props.obj;
    
    // if(this.props.obj == "weapons") {
    //     objType = 
    // }
    
    const item = weapons.filter((weapon) => {
        return weapon.id === props.id
    });
    
    const spell = spells.filter((spell) => {
        return spell.id === props.id
    });
    
    return (
        <div>
        {objType == 'weapons' && 
            <div>
                <h2>{item[0].name}</h2>
                <p>damage: {item[0].damage}</p>
                <p>price: {item[0].price/100}gp</p>
                <p>weight: {item[0].weight}</p>
                <p>{item[0].range.length && 'ranged'}</p>
            </div>
        }
        {objType == 'spells' && 
            <div>
                <p>{spell[0].name}</p>
            </div>
        }
        </div>
    );
};