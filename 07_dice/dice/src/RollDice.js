import React, { Component } from 'react'
import Die from './Die'

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"] // Static data - need not to declare in state. Props is the best place so that parent component can overwrite the props
    };

    constructor(props) {
        super(props)
        this.state = {die1: 'one', die2: 'one'}
        this.roll = this.roll.bind(this)
    }

    roll(){
        // pick 2 new rolls
        const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

        // set state with new rolls
        this.setState({ die1: newDie1, die2: newDie2 });
    }

    render() {
        return (
            <div>
                <Die face={this.state.die1} />
                <Die face={this.state.die2} />
                <button onClick={this.roll}>Roll Dice!</button>
            </div>
        )
    }
}

export default RollDice