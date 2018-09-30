import React from 'react';
import { connect } from 'react-redux';
import EquipForm from './EquipForm';
import { editCharacter, completeCharacter } from '../actions/characters';

export class NewEquipPage extends React.Component {
    onSubmit = (id, character) => {
        this.props.onSubmit(id, character);
        this.props.history.push('/');
    };
    
    render() {
        return (
            <div>
                <EquipForm 
                    currentCharacter={this.props.currentCharacter}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        currentCharacter: state.characters.find((character) => character.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (id, character) => {
            dispatch(editCharacter(id, character));
            dispatch(completeCharacter({id}));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewEquipPage);