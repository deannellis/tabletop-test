import React from 'react';
import SingleRollDie from './SingleRollDie';
import { Link } from 'react-router-dom';

class DetailsForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            description: '',
            name: '',
            gold: undefined,
            hp: undefined,
            error: '',
            lastResult: undefined,
            goldRolls: [],
            refreshKey: 0,
            hpMessage: ''
        };
    }
    
    render() {
        const hpDefined = this.state.hp !== undefined;
        let goldMessage;
        
        switch (this.state.goldRolls.length) {
            case 1:
                goldMessage = this.state.goldRolls[0];
                break;
            case 2:
                goldMessage = `${this.state.goldRolls[0]} + ${this.state.goldRolls[1]}`;
                break;
            case 3:
                goldMessage = `${this.state.goldRolls[0]} + ${this.state.goldRolls[1]} + ${this.state.goldRolls[2]} = ${this.state.gold}`;
                break;
            default:
                goldMessage = 'roll die to determine gold';
        }
        
        if (this.props.currentCharacter !== undefined) {
            return (
                <div>
                    {this.state.error && <p>{this.state.error}</p>}
                    <h2>Roll for Hit Points</h2>
                    {this.renderDie('hp')}
                    <p>HP: {hpDefined ? this.state.hpMessage : 'roll for HP'}</p>
                    <h2>Roll for Gold</h2>
                    <div>
                        {this.renderDie('gold')}
                        {this.renderDie('gold')}
                        {this.renderDie('gold')}
                        
                        <p>
                            Gold: {goldMessage}
                        </p>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <label>
                            Character Name:
                            <input
                                type="text"
                                placeholder="Character Name"
                                autoFocus
                                value={this.state.name}
                                onChange={this.onNameChange}
                            />
                        </label>
                        <textarea
                            placeholder="Add a description of your character"
                            className="textarea-input"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        />
                        <div>
                            <button>Next Step</button>
                        </div>
                    </form>
                </div>    
            )
        } else{
            return (
                <div>
                    Character not found
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                </div>    
            )
        }
    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }
    
    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    }
    
    renderDie = (attribute) => {
        let dieType;
        let attributeKey = attribute;
        
        if(attribute == 'hp'){
            switch(this.props.currentCharacter.charClass) {
                case 'cleric':
                    dieType = 6;
                    break;
                case 'fighter':
                    dieType = 8;
                    break;
                case 'magic-user':
                    dieType = 4;
                    break;
                case 'thief':
                    dieType = 4;
                    break;
            }
        } else if(attribute == 'gold') {
            dieType = 6;
        }
        
        return (
            <div className="dice-container">
                <SingleRollDie dieType={dieType} handleRollDie={this.handleRollDie} attributeKey={attributeKey} updateRefreshKey={this.updateRefreshKey} refreshKey={this.state.refreshKey}/>
            </div>    
        );
    }
    
    handleRollDie = (result, attributeKey) => {
        let conModifier;
        let hpMessage;
        let finalHp;
        
        const currentCharCon = this.props.currentCharacter.abilities.constitution;
        
        if(currentCharCon <= 3) {
            conModifier = -3;
        } else if(currentCharCon > 3 && currentCharCon <= 5) {
            conModifier = -2;
        } else if(currentCharCon > 5 && currentCharCon <= 8) {
            conModifier = -1;
        } else if(currentCharCon > 8 && currentCharCon <= 12) {
            conModifier = 0;
        } else if(currentCharCon > 12 && currentCharCon <= 15) {
            conModifier = 1;
        } else if(currentCharCon > 15 && currentCharCon <= 17) {
            conModifier = 2;
        } else {
            conModifier = 3;
        }
        
        if((result + conModifier) > 0){
            finalHp = result + conModifier;
        } else {
            finalHp = 1;
        }
        
        hpMessage = `${result} + ${conModifier}(Constitution modifier) = ${finalHp}`
        
        if(attributeKey == 'hp') {
            this.setState(() => ({
                lastResult: result,
                [attributeKey]: finalHp,
                hpMessage
            }));
        } else if(attributeKey == 'gold') {
            
            this.setState(() => (
                {
                    goldRolls: [...this.state.goldRolls, (result * 10)],
                }
            ));
        }
        
        const rolls = this.state.goldRolls;
        let goldTotal = rolls.reduce((a, b) => a + b, 0);
        
        if(this.state.goldRolls.length == 3) {
            this.setState(() => (
                {
                    gold: goldTotal
                }
            ));
        }
        
    };
    
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.gold || !this.state.hp || !this.state.name) {
            this.setState(() => ({error: 'Please complete all the steps'}));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit( this.props.currentCharacter.id, {
                hp: this.state.hp,
                name: this.state.name,
                description: this.state.description,
                gold: this.state.gold,
                inProgressStep: 5
            });
        }
    }
    
    updateRefreshKey = (newKey) => {
        this.setState(() => ({
            refreshKey: newKey
        }));
    };
}

export default DetailsForm;