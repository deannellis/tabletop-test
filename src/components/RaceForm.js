import React from 'react';
import { Link } from 'react-router-dom';

class RaceForm extends React.Component {
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
            return (
                <div>
                    <h2>Select Your Race</h2>
                    {this.state.error && <p>{this.state.error}</p>}
                    <form onSubmit={this.onSubmit} >
                        {(currentCharacter.abilities.constitution >= 9 && currentCharacter.abilities.charisma <= 17) 
                            ? 
                            <div>
                                <label>
                                    <input type="radio" name="race" value="dwarf"
                                        checked={this.state.selectedOption === 'dwarf'}
                                        onChange={this.handleOptionChange}
                                    />
                                    Dwarf
                                </label>
                            </div> 
                            : 
                            <p>Dwarf: Your ability scores are insufficient</p>
                        }
                        {(currentCharacter.abilities.intelligence >= 9 && currentCharacter.abilities.constitution <= 17) 
                            ? 
                            <div>
                                <label>
                                    <input type="radio" name="race" value="elf"
                                        checked={this.state.selectedOption === 'elf'}
                                        onChange={this.handleOptionChange}
                                    />
                                    Elf
                                </label>
                            </div> 
                            : 
                            <p>Elf: Your ability scores are insufficient</p>
                        }
                        {(currentCharacter.abilities.dexterity >= 9 && currentCharacter.abilities.strength <= 17) 
                            ? 
                            <div>
                                <label>
                                    <input type="radio" name="race" value="halfling"
                                        checked={this.state.selectedOption === 'halfling'}
                                        onChange={this.handleOptionChange}
                                    />
                                    Halfling
                                </label>
                            </div> 
                            : 
                            <p>Halfling: Your ability scores are insufficient</p>
                        }
                        <label>
                            <input type="radio" name="race" value="human" 
                                checked={this.state.selectedOption === 'human'}
                                onChange={this.handleOptionChange}
                            />
                            Human
                        </label>
    
                        <button>Next Step</button>
                    </form>
                </div>
            )
        } else {
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
    
    handleOptionChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        });
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.selectedOption) {
            this.setState(() => ({
                error: 'Please select a race'
            }));
        } else {
            this.setState(() => ({
                error: ''
            }));
            this.props.onSubmit( this.props.currentCharacter.id, {
                race: this.state.selectedOption,
                inProgressStep: 3
            });
        }
    }
}

export default RaceForm;