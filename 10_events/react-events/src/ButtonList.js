import React, { Component } from "react";
import "./ButtonList.css";

class ButtonList extends Component {
    static defaultProps = {
        colors: ["#e056fd", "#eb4d4b", "#badc58", "#f0932b"]
    }; // List of colors does not change and hence should be in props
    constructor(props) {
        super(props);
        // current color changes and hence should be in state
        this.state = { color: "cyan" }; // initial color
    }

    changeColor(newColor) {
        console.log(`newColor is: ${newColor}`);
        this.setState({ color: newColor });
    }

    render() {
        return (
            <div className='ButtonList' style={{ backgroundColor: this.state.color }}>
                {this.props.colors.map(c => {
                    const colorObj = { backgroundColor: c };
                    return (
                        // <button style={colorObj} onClick={() => this.changeColor(c)}>
                        //     Click on me!
                        // </button>
                        <button style={colorObj} onClick={this.changeColor.bind(this, c)}>
                            Click on me!
                        </button>
                    );
                })}
            </div>
        );
    }
}
// end

export default ButtonList;
