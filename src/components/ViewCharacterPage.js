import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import IdListItem from './IdListItem';
import NotFoundPage from './NotFoundPage';
import { removeCharacter } from '../actions/characters';

export class ViewCharacterPage extends React.Component {
    
    constructor(props){
        super(props);
        this.character = this.props.character;
    }
    
    handleRemoveCharacter = () => {
        this.props.handleRemoveCharacter(this.character.id);
        this.props.history.push('/');
    };
    
    render() {
        if(this.props.character !== undefined) {
            return (
                <div>
                    <h1>{this.character.name}</h1>
                    {this.character.description && <p>{this.character.description}</p>}
                    <p>{this.character.race} - {this.character.charClass}</p>
                    <h2>Ability Scores</h2>
                    <p>{`Strength: ${this.character.abilities.strength}`}</p>
                    <p>{`Intelligence: ${this.character.abilities.intelligence}`}</p>
                    <p>{`Wisdom: ${this.character.abilities.wisdom}`}</p>
                    <p>{`Dexterity: ${this.character.abilities.dexterity}`}</p>
                    <p>{`Charisma: ${this.character.abilities.charisma}`}</p>
                    <p>{`Constitution: ${this.character.abilities.constitution}`}</p>
                    <p>{`HP: ${this.character.hp}`}</p>
                    <p>{`XP: ${this.character.xp}`}</p>
                    <p>{`Gold: ${this.character.gold}`}</p>
                    {this.character.hasOwnProperty("spells") && 
                        <div>
                            <h3>Spells:</h3>
                            <div>
                                {this.character.spells.map((id) => {
                                    return <IdListItem 
                                                key={id} 
                                                id={id}
                                                obj={'spells'}
                                            />
                                })}
                            </div>
                        </div>
                    }
                    <h3>Equipmunk:</h3>
                    <div>
                        {this.character.equipment.map((id) => {
                            return <IdListItem 
                                        key={id} 
                                        id={id}
                                        obj={'weapons'}
                                    />
                        })}
                    </div>
                    <Link to="/">Back</Link>
                    <div>
                        <button onClick={this.handleRemoveCharacter}>Delete Character</button>
                    </div>
                </div>    
            );
        } else {
            return (
                <NotFoundPage />
            );
        }
    }
}

const mapStateToProps = (state, props) => ({
    character: state.characters.find((character) => character.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    handleRemoveCharacter: (charId) => dispatch(removeCharacter({ id: charId }))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewCharacterPage);