import React from 'react';
import { connect } from 'react-redux';
import SingleRollDie from './SingleRollDie';

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
        this.lastCharacter = this.props.characters[this.props.characters.length - 1];
        this.lastCharCon = this.lastCharacter.abilities.constitution;
    }
    
    render() {
        const hpDefined = this.state.hp !== undefined;
        let goldMessage;
        
        switch (this.state.goldRolls.length) {
            case 1:
                goldMessage = this.state.goldRolls[0];
                break;
            case 2:
                goldMessage = `${this.state.goldRolls[0]} + ${this.state.goldRolls[1]} = ${this.state.gold}`;
                break;
            case 3:
                goldMessage = `${this.state.goldRolls[0]} + ${this.state.goldRolls[1]} + ${this.state.goldRolls[2]} = ${this.state.gold}`;
                break;
            default:
                goldMessage = 'roll die to determine gold';
        }
        
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
        );
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
            switch(this.lastCharacter.charClass) {
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
    
    sum = (x, y, z) => {
        return x + y + z;
    }
    
    handleRollDie = (result, attributeKey) => {
        let conModifier;
        let hpMessage;
        let finalHp;
        
        if(this.lastCharCon <= 3) {
            conModifier = -3;
        } else if(this.lastCharCon > 3 && this.lastCharCon <= 5) {
            conModifier = -2;
        } else if(this.lastCharCon > 5 && this.lastCharCon <= 8) {
            conModifier = -1;
        } else if(this.lastCharCon > 8 && this.lastCharCon <= 12) {
            conModifier = 0;
        } else if(this.lastCharCon > 12 && this.lastCharCon <= 15) {
            conModifier = 1;
        } else if(this.lastCharCon > 15 && this.lastCharCon <= 17) {
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
        console.log(rolls);
        let goldTotal = rolls.reduce((a, b) => a + b, 0);
        
        this.setState(() => (
            {
                gold: goldTotal
            }
        ));
        
    };
    
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.gold || !this.state.hp || !this.state.name) {
            this.setState(() => ({error: 'Please complete all the steps'}));
        } else {
            const characters = this.props.characters;
            const lastCharacter = characters[characters.length - 1];
            this.setState(() => ({error: ''}));
            this.props.onSubmit( lastCharacter.id, {
                hp: this.state.hp,
                name: this.state.name,
                description: this.state.description,
                gold: this.state.gold
            });
        }
    }
    
    updateRefreshKey = (newKey) => {
        this.setState(() => ({
            refreshKey: newKey
        }));
    };
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    };
};

export default connect(mapStateToProps)(DetailsForm);