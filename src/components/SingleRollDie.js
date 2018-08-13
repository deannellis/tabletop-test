import React from 'react';
import DieIcon from './DieIcon';
// import ReactTouchEvents from "react-touch-events";
export default class SingleRollDie extends React.Component {
    
    constructor(props) {
     super(props);
     this.state = {
        dieValue: this.props.dieType,
        rollPosition: 1,
        hasRolled: false
     };
     this.time = undefined;
     this.isRolling = false;
     this.orientVariations = 3;
     this.numClicks = 0;
     this.repeat = this.repeat.bind(this);
     this.handleMouseDown = this.handleMouseDown.bind(this);
     this.handleMouseUp = this.handleMouseUp.bind(this);
     this.handleMouseOut = this.handleMouseOut.bind(this);
     this.roll = this.roll.bind(this);
     this.resolveRoll = this.resolveRoll.bind(this);
   }
    
    roll() {
        
        let rollingPosition = Math.floor(Math.random() * ((this.orientVariations + 1) - 1)) + 1;
        if(rollingPosition === this.state.rollPosition) {
            switch(rollingPosition) {
                case 1:
                    rollingPosition++;
                    this.setState({
                        rollPosition: rollingPosition
                    });
                case this.orientVariations:
                    rollingPosition--;
                    this.setState({
                        rollPosition: rollingPosition
                    });
                default:
                    rollingPosition++;
                    this.setState({
                        rollPosition: rollingPosition
                    });
            }
        } else {
            this.setState({
                rollPosition: rollingPosition
            });
        }
    };
    
    resolveRoll() {
        clearTimeout(this.time);
        const newValue = Math.floor(Math.random() * ((this.props.dieType + 1) - 1)) + 1;
        let newRefreshKey = this.props.refreshKey + 1;
        
        this.setState(() => ({
            dieValue: newValue
        }));
        console.log(this.numClicks);
        this.props.handleRollDie(newValue, this.props.attributeKey);
        this.time = undefined;
        this.isRolling = false;
        this.setState({
            rollPosition: 1,
            hasRolled:true
        });
        
        this.props.updateRefreshKey(newRefreshKey);
    };
    
    repeat() {
        this.roll();
        this.time = setTimeout(this.repeat, 150);
    };
    
    handleMouseDown () {
        if(this.isRolling === false) {
            if(!this.state.hasRolled) {
                this.repeat();
                this.isRolling = true;
            }
        }
    };
    
    handleMouseUp () {
        if(!this.state.hasRolled) {
            //this.isRolling = false;
            if(this.numClicks < 1) {
                setTimeout(() => {this.resolveRoll()}, 500);
                this.numClicks++;
            }
        }
    };
    
    handleMouseOut () {
        if(!this.state.hasRolled) {
            if(this.isRolling === true) {
                this.resolveRoll();
            }
        }
    };
    
    render() {
        return (
            <div className={`die ${typeof this.time != 'undefined' && 'die--shake'} ${typeof this.time == 'undefined' && 'die--shake-resolve'} ${this.state.hasRolled && 'die--disabled'}`}>
                <DieIcon
                    draggable="false"
                    name={`d${this.props.dieType.toString()}-orient-${this.state.rollPosition.toString()}`}
                    onMouseDown={this.handleMouseDown}
                    onMouseUp={this.handleMouseUp}
                    onMouseOut={this.handleMouseOut}
                    onTouchStart={this.handleMouseDown}
                    onTouchEnd={this.handleMouseUp}
                />
                <p 
                    className={`die__result ${typeof this.time != 'undefined' && 'die__result--hide'}`}
                >
                    {this.state.dieValue}
                </p>
            </div>
        );
    };
};