import React from 'react';

export default class AbilitiesForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            race: undefined
        };
    }
    
    render() {
        return (
            <div>
                <h2>Select Your Race</h2>
            </div>
        )
    }
}