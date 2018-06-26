import React from 'react';

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
            error: ''
        };
    }
    
    render(){
        
        
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
    renderAttribute = (label, attributeKey) => {
        const attributeValue = this.state[attributeKey];
        const isDefined = attributeValue !== undefined;
        const message = label + ': ' + (isDefined? attributeValue: 'Roll to determine');
        return(
            <div>
                <button type="button" onClick={()=>{this.onRoll(attributeKey)}} disabled={isDefined}>{label}</button>
                <p>{message}</p>
            </div>
        );
    }
    
    onRoll = (attributeKey) => {
        const rollValue = Math.floor(Math.random()*20) + 1;
        this.setState(() => ({
            [attributeKey]: rollValue,
        }));
    }
    
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
}