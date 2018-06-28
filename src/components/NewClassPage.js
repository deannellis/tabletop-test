import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class NewClassPage extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
           
        };
    }
    
    render() {
        console.log(this.props.characters);
        return (
            <div>
                Create Character Step 3
                <Link to="new-char-step-4">Step 4</Link>
            </div>
        );
    }
}

// const NewClassPage = (props) => (
//     <div>
//         Create Character Step 3
//         <Link to="new-char-step-4">Step 4</Link>
//     </div>
// );

const mapDispatchToProps = (state) => {
    return {
        characters: state.characters
    };
};

export default connect(mapDispatchToProps)(NewClassPage);