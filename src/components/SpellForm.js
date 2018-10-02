import React from 'react';
import spells from '../objects/spells';
import SpellListItem from './SpellListItem';
import NotFoundPage from './NotFoundPage';
import { Link } from 'react-router-dom';


class SpellForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            selectedOption: null,
            error: ''
        };
    }
    
    render () {
        if (this.props.currentCharacter !== undefined) {
            return (
                <div>
                    <h2>Choose a Spell</h2>
                    {this.state.error && <p>{this.state.error}</p>}
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
                <NotFoundPage />    
            );
        }
    }
    
    handleSelectRadio = (selection) => {
        this.setState(() => ({
            selectedOption: selection
        }));
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.selectedOption == null) {
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