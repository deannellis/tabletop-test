import React from 'react';
import SingleRollDie from './SingleRollDie';

export default class AbilitiesForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            strength: undefined,
            intelligence: undefined,
            wisdom: undefined,
            dexterity: undefined,
            constitution: undefined,
            charisma: undefined,
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
            [attributeKey]: result
        }));
    };
    
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.strength || !this.state.intelligence || !this.state.wisdom || !this.state.dexterity || !this.state.constitution || !this.state.charisma) {
            this.setState(() => ({
                error: 'Please roll all scores'
            }));
        } else {
            this.setState(() => ({
                error: ''
            }));
            this.props.onSubmit({
                abilities: {
                    strength: this.state.strength,
                    intelligence: this.state.intelligence,
                    wisdom: this.state.wisdom,
                    dexterity: this.state.dexterity,
                    constitution: this.state.constitution,
                    charisma: this.state.charisma
                },
                name: 'Test',
                charClass: 'test'
            });
        } 
    }
    
    renderAttribute = (label, attributeKey) => {
        const attributeValue = this.state[attributeKey];
        const isDefined = attributeValue !== undefined;
        const message = label + ': ' + (isDefined ? attributeValue : 'roll to determine');
        return(
            <div>
                <p>{message}</p>
                <div className="dice-container">
                    <SingleRollDie dieType={20} handleRollDie={this.handleRollDie} attributeKey={attributeKey} updateRefreshKey={this.updateRefreshKey} refreshKey={this.state.refreshKey}/>
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