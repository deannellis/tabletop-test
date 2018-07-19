import React, { Component, PropTypes } from 'react';

class Checkbox extends React.Component {
    state = {
        isChecked: false,
    }
    
    toggleCheckboxChange = () => {
        const { handleCheckboxChange } = this.props;
        const { isChecked } = this.state;
    
        this.setState(({ isChecked }) => (
            {
                isChecked: !isChecked,
            }
        ));
    
        handleCheckboxChange(!isChecked);
    }
    
      render() {
        const { label } = this.props;
        const { isChecked } = this.state;
        let isDisabled;
        if(isChecked) {
            isDisabled = false;
        } else {
            isDisabled = this.props.isDisabled
        }
    
        return (
          <div className="checkbox">
            <label>
                <input
                    type="checkbox"
                    value={isChecked}
                    checked={isChecked}
                    onChange={this.toggleCheckboxChange}
                    disabled={isDisabled}
                />
    
              {label}
            </label>
          </div>
        );
      }
}

export default Checkbox;