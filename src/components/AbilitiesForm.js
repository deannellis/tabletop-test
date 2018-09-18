import React from 'react';
import SingleRollDie from './SingleRollDie';
import uuid from 'uuid';

export default class AbilitiesForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            strength: [],
            intelligence: [],
            wisdom: [],
            dexterity: [],
            constitution: [],
            charisma: [],
            error: '',
            refreshKey: 0,
            lastDieRolled: undefined,
            lastResult: undefined
        };
    }
    
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit} >
                    {this.renderAttribute('Strength', 'strength')}
                    {this.renderAttribute('Intelligence', 'intelligence')}
                    {this.renderAttribute('Wisdom', 'wisdom')}
                    {this.renderAttribute('Dexterity', 'dexterity')}
                    {this.renderAttribute('Constitution', 'constitution')}
                    {this.renderAttribute('Charisma', 'charisma')}
                    <button>Next Step</button>
                </form>
            </div>
        );
    }
    
    handleRollDie = (result, attributeKey) => {
        this.setState(() => ({
            lastResult: result,
            [attributeKey]: [...this.state[attributeKey], result]
        }));
    };
    
    onSubmit = (e) => {
        e.preventDefault();
        
        const sum = (accumulator, currentValue) => accumulator + currentValue;
        
        if(this.state.strength.length < 3 || this.state.intelligence.length < 3 || this.state.wisdom.length < 3 || this.state.dexterity.length < 3 || this.state.constitution.length < 3 || this.state.charisma.length < 3) {
            this.setState(() => ({
                error: 'Please roll all scores'
            }));
        } else {
            this.setState(() => ({
                error: ''
            }));
            this.props.onSubmit({
                id: uuid(),
                abilities: {
                    strength: this.state.strength.reduce(sum),
                    intelligence: this.state.intelligence.reduce(sum),
                    wisdom: this.state.wisdom.reduce(sum),
                    dexterity: this.state.dexterity.reduce(sum),
                    constitution: this.state.constitution.reduce(sum),
                    charisma: this.state.charisma.reduce(sum)
                },
                name: 'In-Progress Character',
                charClass: 'unkown'
            });
        } 
    }
    
    renderAttribute = (label, attributeKey) => {
        const attributeValue = this.state[attributeKey];
        const isDefined = attributeValue.length !== 0;
        let rollsString = '';
        if(this.state[attributeKey].length < 3){
            this.state[attributeKey].forEach(
                (roll) => {rollsString += `${roll} + `}
            );
        } else {
            let total = 0;
            this.state[attributeKey].forEach(
                (roll) => {total += roll}
            );
            rollsString = `${this.state[attributeKey][0]} + ${this.state[attributeKey][1]} + ${this.state[attributeKey][2]} = ${total}`;
        }
        
        const message = label + ': ' + (isDefined ? rollsString : 'roll to determine');
        return(
            <div>
                <p>{message}</p>
                <div className="dice-container">
                    <SingleRollDie dieType={6} handleRollDie={this.handleRollDie} attributeKey={attributeKey} updateRefreshKey={this.updateRefreshKey} refreshKey={this.state.refreshKey}/>
                    <SingleRollDie dieType={6} handleRollDie={this.handleRollDie} attributeKey={attributeKey} updateRefreshKey={this.updateRefreshKey} refreshKey={this.state.refreshKey}/>
                    <SingleRollDie dieType={6} handleRollDie={this.handleRollDie} attributeKey={attributeKey} updateRefreshKey={this.updateRefreshKey} refreshKey={this.state.refreshKey}/>
                </div>
            </div>
        );
    }
    
    updateRefreshKey = (newKey) => {
        this.setState(() => ({
            refreshKey: newKey
        }));
    };
}