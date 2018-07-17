import React from 'react';

const WeaponListItem = ({ damage, name, price, weight }) => (
    <div>
        <h2>{name}</h2>
        <p>damage: {damage}</p>
        <p>price: {price}</p>
        <p>weight: {weight}</p>
    </div>    
);

export default WeaponListItem;