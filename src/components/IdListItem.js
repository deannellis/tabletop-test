import React from 'react';
import weapons from '../objects/weapons';

export default (props) => {
    const item = weapons.filter((weapon) => {
        return weapon.id === props.id
    });
    
    return (
        <div>
            <h2>{item[0].name}</h2>
            <p>damage: {item[0].damage}</p>
            <p>price: {item[0].price/100}gp</p>
            <p>weight: {item[0].weight}</p>
            <p>{item[0].range.length && 'ranged'}</p>
        </div>    
    );
};