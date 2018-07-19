import React from 'react';
import weapons from '../objects/weapons';
import WeaponListItem from './WeaponListItem';

export default class EquipForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            names: [],
            gold: 3000
        }
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    Equip form
                    <h3>{this.state.gold}</h3>
                    {weapons.map((weapon) => {
                        // return <WeaponListItem key={weapon.id} {...weapon} handleToggleCheckbox={this.toggleCheckbox}/>
                        return <WeaponListItem key={weapon.id} {...weapon} handleToggleCheckbox={this.toggleCheckbox} currentGold={this.state.gold} />
                    })}
                    <button>Finish</button>
                </form>
            </div>    
        );
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.names);
    }
    
    toggleCheckbox = (isChecked, name, price) => {
        if(isChecked) {
            this.setState({ gold: this.state.gold - price});
            this.setState({ names: [ ...this.state.names, name ]});
        } else {
            this.setState({ gold: this.state.gold + price});
            const array = [...this.state.names]; // make a separate copy of the array
            const index = array.indexOf(name);
            array.splice(index, 1);
            this.setState({names: array});
        }
    }
}