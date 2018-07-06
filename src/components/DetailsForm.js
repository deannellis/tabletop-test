import React from 'react';
import { connect } from 'react-redux';

class DetailsForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            description: '',
            name: '',
            gold: undefined,
            hp: undefined,
            error: ''
        };
    }
    
    render() {
        const hpDefined = this.state.hp !== undefined;
        const goldDefined = this.state.gold !== undefined;
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <h2>Roll for Hit Points</h2>
                <div>
                    <button 
                        type="button"
                        onClick={this.onRollHp}
                        disabled={hpDefined}
                    >
                        HP
                    </button>
                    <p>HP: {hpDefined ? this.state.hp : 'roll for HP'}</p>
                </div>
                <h2>Roll for Gold</h2>
                <div>
                    <button 
                        type="button"
                        onClick={this.onRollGold}
                        disabled={goldDefined}
                    >
                        Gold
                    </button>
                    <p>HP: {goldDefined ? this.state.gold : 'roll for gold'}</p>
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
    
    onRollGold = () => {
        // Roll value needs to bee replaced with 3 d6 dice components
        // Temporary solution
        const rollValue = (3 * (Math.floor(Math.random()*6) + 1)) * 10;
        this.setState(() => ({
            gold: rollValue
        }));
    }
    
    onRollHp = () => {
        let rollValue;
        let conModifier
        const characters = this.props.characters;
        const lastCharacter = characters[characters.length - 1];
        const lastCharCon = lastCharacter.abilities.constitution;
        
        if(lastCharCon <= 3) {
            conModifier = -3;
        } else if(lastCharCon > 3 && lastCharCon <= 5) {
            conModifier = -2;
        } else if(lastCharCon > 5 && lastCharCon <= 8) {
            conModifier = -1;
        } else if(lastCharCon > 8 && lastCharCon <= 12) {
            conModifier = 0;
        } else if(lastCharCon > 12 && lastCharCon <= 15) {
            conModifier = 1;
        } else if(lastCharCon > 15 && lastCharCon <= 17) {
            conModifier = 2;
        } else {
            conModifier = 3;
        }
        
        switch(lastCharacter.charClass) {
            case 'cleric':
                rollValue = (Math.floor(Math.random()*6) + 1) + conModifier;
                if(rollValue < 1) {rollValue = 1}
                console.log('cleric, roll: ' + rollValue);
                break;
            case 'fighter':
                rollValue = (Math.floor(Math.random()*8) + 1) + conModifier;
                if(rollValue < 1) {rollValue = 1}
                console.log('fighter, roll: ' + rollValue);
                break;
            case 'magic-user':
                rollValue = (Math.floor(Math.random()*4) + 1) + conModifier;
                if(rollValue < 1) {rollValue = 1}
                console.log('magic-user, roll: ' + rollValue);
                break;
            case 'thief':
                rollValue = (Math.floor(Math.random()*4) + 1) + conModifier;
                if(rollValue < 1) {rollValue = 1}
                console.log('thief, roll: ' + rollValue);
                break;
        }
        
        this.setState(() => ({
            hp: rollValue,
        }));
    }
    
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
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    };
};

export default connect(mapStateToProps)(DetailsForm);