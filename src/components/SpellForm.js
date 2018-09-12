import React from 'react';
import { connect } from 'react-redux';
import spells from '../objects/spells';
import SpellListItem from './SpellListItem';

class SpellForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            selectedOption: '',
            error: ''
        };
    }
    
    render () {
        const characters = this.props.characters;
        const lastCharacter = characters[characters.length - 1];
        
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
        );
    }
    
    handleSelectRadio = (selection) => {
        console.log(selection);
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
            const characters = this.props.characters;
            const lastCharacter = characters[characters.length - 1];
            this.setState(() => ({
                error: ''
            }));
            this.props.onSubmit( lastCharacter.id, {
                spells: [this.state.selectedOption]
            });
        }
    };
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    };
};

export default connect(mapStateToProps)(SpellForm);