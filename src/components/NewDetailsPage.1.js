import React from 'react';
import { connect } from 'react-redux';
import DetailsForm from './DetailsForm';

class NewDetailsPage extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
           
        };
    }
    
    render() {
        console.log(this.props.characters);
        return (
            <div>
                Create Character Step 4
                <DetailsForm />
            </div>
        );
    }
}

const mapDispatchToProps = (state) => {
    return {
        characters: state.characters
    };
};

export default connect(mapDispatchToProps)(NewDetailsPage);