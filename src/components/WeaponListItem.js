import React from 'react';
import Checkbox from './Checkbox';

export default (props) => {
    const goldPrice = props.price / 100;
    let canPurchase = (props.currentGold >= goldPrice);
    const toggleCheckbox = isChecked => {
        props.handleToggleCheckbox(isChecked, props.id, goldPrice)
    }
    
    return (
        <div>   
            <h2>{props.name}</h2>
            <p>damage: {props.damage}</p>
            <p>price: {goldPrice}gp</p>
            <p>weight: {props.weight}</p>
            <p>{props.range.length && 'ranged'}</p>
            <Checkbox
                label={`Select ${props.name}`}
                handleCheckboxChange={toggleCheckbox}
                key={props.name}
                isDisabled={!canPurchase}
            />
        </div>    
    );
}