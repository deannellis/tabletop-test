import React from 'react';
import Checkbox from './Checkbox';

export default class EquipForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
        this.goldPrice = this.props.price / 100;
    }
    
    render() {
        let canPurchase = (this.props.currentGold >= this.goldPrice);
        return (
            <div>   
                <h2>{this.name}</h2>
                <p>damage: {this.props.damage}</p>
                <p>price: {this.goldPrice}gp</p>
                <p>weight: {this.props.weight}</p>
                <p>{this.props.range.length && 'ranged'}</p>
                <Checkbox
                    label={`Select ${this.props.name}`}
                    handleCheckboxChange={this.toggleCheckbox}
                    key={this.props.name}
                    isDisabled={!canPurchase}
                />
            </div>    
        );
    }
    
    toggleCheckbox = isChecked => {
        this.props.handleToggleCheckbox(isChecked, this.props.id, this.goldPrice)
    }
}