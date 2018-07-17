import React from 'react';
import weapons from '../objects/weapons';
import WeaponListItem from './WeaponListItem';

export default class EquipForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {}
    }
    
    render() {
        return (
            <div>
                Equip form
                {weapons.map((weapon) => {
                    return <WeaponListItem key={weapon.id} {...weapon} />
                })}
            </div>    
        );
    }
}