import React from 'react';

export default class SpellListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: ''
        }
    }
    
    render() {
        switch(this.props.spellType) {
            case 'magic-user':
                if(this.props.type == 'magic-user' || this.props.type == undefined){
                    return (
                        <div>
                            <label>
                                <input type="radio" name="class" value={this.props.id}
                                    checked={this.props.selected == this.props.id}
                                    onChange={this.handleOptionChange}
                                />
                                {this.props.name}
                            </label>
                            <p>{this.props.shortDescription}</p>
                        </div>
                    );
                } else {
                    return (<div></div>);
                }
                break;
            case 'cleric':
                if(this.props.type == 'cleric' || this.props.type == undefined){
                    return (
                        <div>
                            <label>
                                <input type="radio" name="class" value={this.props.id}
                                    checked={this.props.selected == this.props.id}
                                    onChange={this.handleOptionChange}
                                />
                                {this.props.name}
                            </label>
                            <p>{this.props.shortDescription}</p>
                        </div>
                    );
                } else {
                    return (<div></div>);
                }
                break;
            default:
                return (
                    <div>
                        <label>
                            <input type="radio" name="class" value={this.props.id}
                                    checked={this.props.selected == this.props.id}
                                    onChange={this.handleOptionChange}
                                />
                            {this.props.name}
                        </label>
                        <p>{this.props.shortDescription}</p>
                    </div>
                );
        }
    }
    
    handleOptionChange = (e) => {
        // console.log("this.state.selected:"+this.state.selected);
        // this.setState({
        //     selected: e.target.value
        // });
        // /\ This isn't doing anything. Make stateless
        this.props.handleSelectRadio(e.target.value);
    }
}