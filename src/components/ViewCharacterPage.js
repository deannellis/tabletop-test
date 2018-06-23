import React from 'react';

const ViewCharacterPage = (props) => {
    return (
        <div>
            View Character {props.match.params.id}
        </div>    
    );
};

export default ViewCharacterPage;