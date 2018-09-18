import React from 'react';

export default (props) => {
    
    const handleOptionChange = (e) => {
        props.handleSelectRadio(e.target.value);
    }
    
    switch(props.spellType) {
        case 'magic-user':
            if(props.type == 'magic-user' || props.type == undefined){
                return (
                    <div>
                        <label>
                            <input type="radio" name="class" value={props.id}
                                checked={props.selected == props.id}
                                onChange={handleOptionChange}
                            />
                            {props.name}
                        </label>
                        <p>{props.shortDescription}</p>
                    </div>
                );
            } else {
                return (<div></div>);
            }
        case 'cleric':
            if(props.type == 'cleric' || props.type == undefined){
                return (
                    <div>
                        <label>
                            <input type="radio" name="class" value={props.id}
                                checked={props.selected == props.id}
                                onChange={handleOptionChange}
                            />
                            {props.name}
                        </label>
                        <p>{props.shortDescription}</p>
                    </div>
                );
            } else {
                return (<div></div>);
            }
        default:
            return (
                <div>
                    <label>
                        <input type="radio" name="class" value={props.id}
                                checked={props.selected == props.id}
                                onChange={handleOptionChange}
                            />
                        {props.name}
                    </label>
                    <p>{props.shortDescription}</p>
                </div>
            );
    }
}