import React from 'react';
import SingleRollDie from './SingleRollDie';

export default class AbilitiesForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            strength: [],
            intelligence: [],
            wisdom: [],
            dexterity: [],
            constitution: [],
            charisma: [],
            error: '',
            refreshKey: 0,
            lastDieRolled: undefined,
            lastResult: undefined
        };
    }
    
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit} >
                    {this.renderAttribute('Strength', 'strength')}
                    {this.renderAttribute('Intelligence', 'intelligence')}
                    {this.renderAttribute('Wisdom', 'wisdom')}
                    {this.renderAttribute('Dexterity', 'dexterity')}
                    {this.renderAttribute('Constitution', 'constitution')}
                    {this.renderAttribute('Charisma', 'charisma')}
                    <button>Next Step</button>
                </form>
            </div>
        );
    }
    
    handleRollDie = (result, attributeKey) => {
        switch (attributeKey) {
            case 'strength':
                if(this.state.strength.length !== 2) {
                    this.setState(() => ({
                        lastResult: result,
                        [attributeKey]: [...this.state.strength + result]
                    }));
                } else {
                    const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
                    const total = this.state.strength.reduce(reducer);
                    this.setState(() => ({
                        lastResult: result,
                        [attributeKey]: (total + result)
                    }));
                }
                break;
            case 'intelligence':
                if(this.state.intelligence.length !== 2) {
                    this.setState(() => ({
                        lastResult: result,
                        [attributeKey]: [...this.state.intelligence + result]
                    }));
                } else {
                    const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
                    const total = this.state.intelligence.reduce(reducer);
                    this.setState(() => ({
                        lastResult: result,
                        [attributeKey]: (total + result)
                    }));
                }
                break;
            case 'wisdom':
                if(this.state.wisdom.length !== 2) {
                    this.setState(() => ({
                        lastResult: result,
                        [attributeKey]: [...this.state.wisdom + result]
                    }));
                } else {
                    const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
                    const total = this.state.wisdom.reduce(reducer);
                    this.setState(() => ({
                        lastResult: result,
                        [attributeKey]: (total + result)
                    }));
                }
                break;
            case 'dexterity':
                if(this.state.dexterity.length !== 2) {
                    this.setState(() => ({
                        lastResult: result,
                        [attributeKey]: [...this.state.dexterity + result]
                    }));
                } else {
                    const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
                    const total = this.state.dexterity.reduce(reducer);
                    this.setState(() => ({
                        lastResult: result,
                        [attributeKey]: (total + result)
                    }));
                }
                break;
            case 'constitution':
                if(this.state.constitution.length !== 2) {
                    this.setState(() => ({
                        lastResult: result,
                        [attributeKey]: [...this.state.constitution + result]
                    }));
                } else {
                    const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
                    const total = this.state.constitution.reduce(reducer);
                    this.setState(() => ({
                        lastResult: result,
                        [attributeKey]: (total + result)
                    }));
                }
                break;
            case 'charisma':
                if(this.state.charisma.length !== 2) {
                    this.setState(() => ({
                        lastResult: result,
                        [attributeKey]: [...this.state.charisma + result]
                    }));
                } else {
                    const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
                    const total = this.state.charisma.reduce(reducer);
                    this.setState(() => ({
                        lastResult: result,
                        [attributeKey]: (total + result)
                    }));
                }
                break;
            default:
                console.log('some other shit');
        }
        // this.setState(() => ({
        //     lastResult: result,
        //     [attributeKey]: result
        // }));
    };
    
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.strength || !this.state.intelligence || !this.state.wisdom || !this.state.dexterity || !this.state.constitution || !this.state.charisma) {
            this.setState(() => ({
                error: 'Please roll all scores'
            }));
        } else {
            this.setState(() => ({
                error: ''
            }));
            this.props.onSubmit({
                abilities: {
                    strength: this.state.strength,
                    intelligence: this.state.intelligence,
                    wisdom: this.state.wisdom,
                    dexterity: this.state.dexterity,
                    constitution: this.state.constitution,
                    charisma: this.state.charisma
                },
                name: 'Test',
                charClass: 'test'
            });
        } 
    }
    
    renderAttribute = (label, attributeKey) => {
        const attributeValue = this.state[attributeKey];
        const isDefined = attributeValue !== undefined;
        const message = label + ': ' + (isDefined ? attributeValue : 'roll to determine');
        return(
            <div>
                <p>{message}</p>
                <div className="dice-container">
                    <SingleRollDie dieType={6} handleRollDie={this.handleRollDie} attributeKey={attributeKey} updateRefreshKey={this.updateRefreshKey} refreshKey={this.state.refreshKey}/>
                    <SingleRollDie dieType={6} handleRollDie={this.handleRollDie} attributeKey={attributeKey} updateRefreshKey={this.updateRefreshKey} refreshKey={this.state.refreshKey}/>
                    <SingleRollDie dieType={6} handleRollDie={this.handleRollDie} attributeKey={attributeKey} updateRefreshKey={this.updateRefreshKey} refreshKey={this.state.refreshKey}/>
                </div>
            </div>
        );
    }
    
    updateRefreshKey = (newKey) => {
        this.setState(() => ({
            refreshKey: newKey
        }));
    };
}