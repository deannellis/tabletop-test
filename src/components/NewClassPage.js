import React from 'react';
import { connect } from 'react-redux';
import ClassForm from './ClassForm';
import { editCharacter } from '../actions/characters';

export class NewClassPage extends React.Component {
    onSubmit = (id, character) => {
        this.props.onSubmit(id, character);
        this.props.history.push(`/new-char-step-${character.inProgressStep}/${id}`);
    };
    
    render() {
        return (
            <div>
                <ClassForm 
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

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (id, character) => dispatch(editCharacter(id, character))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewClassPage);