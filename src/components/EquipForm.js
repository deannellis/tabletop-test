import React from 'react';
import { connect } from 'react-redux';
import weapons from '../objects/weapons';
import WeaponListItem from './WeaponListItem';

class EquipForm extends React.Component {
    constructor(props){
        super(props);
        
        const characters = this.props.characters;
        const lastCharacter = characters[characters.length - 1];
        this.currentCharacter = lastCharacter;
        this.state = {
            ids: [],
            gold: lastCharacter.gold
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
        console.log(this.state.names);
        this.props.onSubmit( this.currentCharacter.id, {
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

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    };
};

export default connect(mapStateToProps)(EquipForm);