import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ViewCharacterPage = (props) => {
    if(props.character.name == null) {
        console.log('undefined');
        props.history.push('/');
    }
    return (
        <div> 
            FML
        </div>    
    );
};

const mapStateToProps = (state, props) => ({
    character: state.characters.find((character) => character.id === props.match.params.id)
});

export default connect(mapStateToProps)(ViewCharacterPage);