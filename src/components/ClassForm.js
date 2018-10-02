import React from 'react';
import spells from '../objects/spells';
import SpellListItem from './SpellListItem';
import { Link } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

class ClassForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            selectedOption: '',
            error: ''
        };
    }
    
    render() {
        const currentCharacter = this.props.currentCharacter;
        
        if (currentCharacter !== undefined) {
            let canCleric = true;
            let canFighter = true;
            let canMagicUser = true;
            let canThief = true;
            const isHalfling = currentCharacter.race == 'halfling';
            const isDwarf = currentCharacter.race == 'dwarf';
            
            if(isDwarf) {
                canMagicUser = false;
            } else if (isHalfling) {
                canFighter = false;
            }
            
            if(currentCharacter.abilities.wisdom < 9) {
                canCleric = false;
            }
            
            if(currentCharacter.abilities.strength < 9) {
                canFighter = false;
            }
            
            if(currentCharacter.abilities.intelligence < 9) {
                canMagicUser = false;
            }
            
            if(currentCharacter.abilities.dexterity < 9) {
                canThief = false;
            }
            
            return (
                <div>
                    <h2>Select Your Class</h2>
                    {this.state.error && <p>{this.state.error}</p>}
                    <form onSubmit={this.onSubmit} >
                        {canCleric 
                            ? 
                            <div>
                                <label>
                                    <input type="radio" name="class" value="cleric"
                                        checked={this.state.selectedOption === 'cleric'}
                                        onChange={this.handleOptionChange}
                                    />
                                    Cleric
                                </label>
                            </div> 
                            : 
                            <p>Cleric: Your wisdom score is too low</p>
                        }
                        {canFighter 
                            ? 
                            <div>
                                <label>
                                    <input type="radio" name="class" value="fighter"
                                        checked={this.state.selectedOption === 'fighter'}
                                        onChange={this.handleOptionChange}
                                    />
                                    Fighter
                                </label>
                            </div> 
                            :
                            <p>{isHalfling ? 'Fighter: Halflings cannot be fighters' : 'Fighter: Your strength score is too low' }</p>
                        }
                        {canMagicUser 
                            ? 
                            <div>
                                <label>
                                    <input type="radio" name="class" value="magic-user"
                                        checked={this.state.selectedOption === 'magic-user'}
                                        onChange={this.handleOptionChange}
                                    />
                                    Magic-User
                                </label>
                            </div> 
                            : 
                            <p>{isDwarf ? 'Magic-User: Dwarves cannot be Magic-Users' : 'Magic-User: Your intelligence score is too low' }</p>
                        }
                        {canThief 
                            ? 
                            <div>
                                <label>
                                    <input type="radio" name="class" value="thief"
                                        checked={this.state.selectedOption === 'thief'}
                                        onChange={this.handleOptionChange}
                                    />
                                    Thief
                                </label>
                            </div> 
                            : 
                            <p>Thief: Your dexterity score is too low</p>
                        }
                        <button>Next Step</button>
                    </form>
                </div>
            )
        } else{
            return (
                <NotFoundPage />  
            )
        }
    }
    
    handleOptionChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        });
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.selectedOption) {
            this.setState(() => ({
                error: 'Please select a class'
            }));
        } else {
            this.setState(() => ({
                error: ''
            }));
            this.props.onSubmit( this.props.currentCharacter.id, {
                charClass: this.state.selectedOption,
                inProgressStep: `${this.state.selectedOption == 'magic-user' ? 3.5 : 4 }`
            });
        }
    }
}

export default ClassForm;