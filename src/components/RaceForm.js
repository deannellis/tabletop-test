import React from 'react';
import { connect } from 'react-redux';

class RaceForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            selectedOption: '',
            error: ''
        };
    }
    
    render() {
        const characters = this.props.characters;
        const lastCharacter = characters[characters.length - 1];
        return (
            <div>
                <h2>Select Your Race</h2>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit} >
                    {(lastCharacter.abilities.constitution >= 9 && lastCharacter.abilities.charisma <= 17) 
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
                    {(lastCharacter.abilities.intelligence >= 9 && lastCharacter.abilities.constitution <= 17) 
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
                    {(lastCharacter.abilities.dexterity >= 9 && lastCharacter.abilities.strength <= 17) 
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
    }
    
    handleOptionChange = (e) => {
        const value = `${e.target.value}`;
        console.log(value);
        this.setState(() => ({
            selectedOption: value
        }));
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.selectedOption) {
            this.setState(() => ({
                error: 'Please select a race'
            }));
        } else {
            const characters = this.props.characters;
            const lastCharacter = characters[characters.length - 1];
            this.setState(() => ({
                error: ''
            }));
            this.props.onSubmit( lastCharacter.id, {
                race: this.state.selectedOption
            });
        }
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    };
};

export default connect(mapStateToProps)(RaceForm);