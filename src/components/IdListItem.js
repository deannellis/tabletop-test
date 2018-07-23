import React from 'react';
import weapons from '../objects/weapons';

export default (props) => {
    const item = weapons.filter((weapon) => {
        return weapon.id === props.id
    });
    console.log(item);
    return (
        <div>
            <h2>{item.name}</h2>
            <p>damage: {item.damage}</p>
            <p>price: {item.price/100}gp</p>
            <p>weight: {item.weight}</p>
            <p>{item.range}</p>
        </div>    
    );
};