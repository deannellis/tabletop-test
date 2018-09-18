import React from 'react';
import weapons from '../objects/weapons';
import WeaponListItem from './WeaponListItem';

class EquipForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            ids: [],
            gold: this.props.currentCharacter.gold
        }
    }
    
    render() {
        
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    Equip form
                    <h3>{this.state.gold}</h3>
                    {weapons.map((weapon) => {
                        return <WeaponListItem 
                                    key={weapon.id} 
                                    {...weapon}
                                    handleToggleCheckbox={this.handleToggleCheckbox}
                                    currentGold={this.state.gold}
                                />
                    })}
                    <button>Finish</button>
                </form>
            </div>    
        );
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit( this.props.currentCharacter.id, {
            equipment: this.state.ids
        });
    }
    
    handleToggleCheckbox = (isChecked, id, price) => {
        if(isChecked) {
            this.setState({ gold: this.state.gold - price});
            this.setState({ ids: [ ...this.state.ids, id ]});
        } else {
            this.setState({ gold: this.state.gold + price});
            const array = [...this.state.ids]; // make a separate copy of the array
            const index = array.indexOf(id);
            array.splice(index, 1);
            this.setState({ids: array});
        }
    }
}

export default EquipForm;