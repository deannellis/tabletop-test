import React from 'react';

export default class AbilitiesForm extends React.Component {
    state = {
        strength: undefined,
        intelligence: undefined,
        wisdom: undefined,
        dexterity: undefined,
        constitution: undefined,
        charisma: undefined
    };
    
    renderButtons = () => {
        Object.keys(this.state).map((key) => {
            return 
            <div>
                <button type="button" onClick={this.onRollStrength} disabled={typeof this.state.strength != 'undefined'}>Strength</button>
                <p>Strength: {typeof this.state.strength == 'undefined' ? 'Roll to determine Strength' : this.state.strength }</p>
            
        });
    };
    
    onRollStrength = () => {
        let rollValue = Math.floor(Math.random() * ((20 + 1) - 1)) + 1;
        this.setState(() => ({strength: rollValue}));
    };
    
    onRollIntelligence = () => {
        let rollValue = Math.floor(Math.random() * ((20 + 1) - 1)) + 1;
        this.setState(() => ({intelligence: rollValue}));
    };
    
    onRollWisdom = () => {
        let rollValue = Math.floor(Math.random() * ((20 + 1) - 1)) + 1;
        this.setState(() => ({wisdom: rollValue}));
    };
    
    onRollDexterity = () => {
        let rollValue = Math.floor(Math.random() * ((20 + 1) - 1)) + 1;
        this.setState(() => ({dexterity: rollValue}));
    };
    
    onRollConstitution = () => {
        let rollValue = Math.floor(Math.random() * ((20 + 1) - 1)) + 1;
        this.setState(() => ({constitution: rollValue}));
    };
    
    render() {
        return (
            <div>
                <form>
                    {this.renderButtons()}
                </form>
            </div>
        );
    }
}