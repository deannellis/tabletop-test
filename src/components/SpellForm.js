import React from 'react';
import spells from '../objects/spells';
import SpellListItem from './SpellListItem';
import { Link } from 'react-router-dom';

class SpellForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            selectedOption: '',
            error: ''
        };
    }
    
    render () {
        if (this.props.currentCharacter !== undefined) {
            return (
                <div>
                    <h2>Choose a Spell</h2>
                    <form onSubmit={this.onSubmit}>
                        {spells.map((spell) => {
                            return <SpellListItem 
                                        key={spell.id} 
                                        {...spell}
                                        spellType={'magic-user'}
                                        selected={this.state.selectedOption}
                                        handleSelectRadio={this.handleSelectRadio}
                                    />
                        })}
                        <button>Next Step</button>
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
    
    handleSelectRadio = (selection) => {
        this.setState(() => ({
            selectedOption: selection
        }));
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.selectedOption) {
            this.setState(() => ({
                error: 'Please select a spell'
            }));
        } else {
            this.setState(() => ({
                error: ''
            }));
            this.props.onSubmit( this.props.currentCharacter.id, {
                spells: [this.state.selectedOption],
                inProgressStep: 5
            });
        }
    };
}

export default SpellForm;