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
    
    onRollCharisma = () => {
        let rollValue = Math.floor(Math.random() * ((20 + 1) - 1)) + 1;
        this.setState(() => ({charisma: rollValue}));
    };
    
    render() {
        return (
            <div>
                <form>
                    <button type="button" onClick={this.onRollStrength} disabled={typeof this.state.strength != 'undefined'}>Strength</button>
                    <p>Strength: {typeof this.state.strength == 'undefined' ? 'Roll to determine Strength' : this.state.strength }</p>
                    
                    <button type="button" onClick={this.onRollIntelligence} disabled={typeof this.state.intelligence != 'undefined'}>Intelligence</button>
                    <p>Intelligence: {typeof this.state.intelligence == 'undefined' ? 'Roll to determine Intelligence' : this.state.intelligence }</p>
                    
                    <button type="button" onClick={this.onRollWisdom} disabled={typeof this.state.wisdom != 'undefined'}>Wisdom</button>
                    <p>Wisdom: {typeof this.state.wisdom == 'undefined' ? 'Roll to determine Wisdom' : this.state.wisdom }</p>
                    
                    <button type="button" onClick={this.onRollDexterity} disabled={typeof this.state.dexterity != 'undefined'}>Dexterity</button>
                    <p>Dexterity: {typeof this.state.dexterity == 'undefined' ? 'Roll to determine Dexterity' : this.state.dexterity }</p>
                   
                    <button type="button" onClick={this.onRollConstitution} disabled={typeof this.state.constitution != 'undefined'}>Constitution</button>
                    <p>Constitution: {typeof this.state.constitution == 'undefined' ? 'Roll to determine Constitution' : this.state.constitution }</p>
                    
                    <button type="button" onClick={this.onRollCharisma} disabled={typeof this.state.charisma != 'undefined'}>Charisma</button>
                    <p>Charisma: {typeof this.state.charisma == 'undefined' ? 'Roll to determine Charisma' : this.state.charisma }</p>
                    
                </form>
            </div>
        );
    }
}