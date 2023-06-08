import React from "react";
import "./Counter.css";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      oddOrEven: ["ODD", "EVEN"],
    };
  }

  handleIncremetn = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  handleReste = () => {
    this.setState({
      number: 0,
    });
  };
  handleDecrement = () => {
    if (!this.state.number) {
      return;
    }

    this.setState({
      number: this.state.number - 1,
    });
  };

  render() {
    return (
      <div className="container">
        <h2>My Counter:</h2>
        <div className="counter-container">
          <p>Counter value is: {this.state.number}</p>
          <div className="inner-counter-container">
            <button onClick={this.handleIncremetn}>Increment</button>
            <button onClick={this.handleDecrement}>Decrement</button>
            <button onClick={this.handleReste}>Reset</button>
          </div>
          <span>{this.state.number % 2 === 0 ? "EVEN" : "ODD"}</span>
        </div>
      </div>
    );
  }
}

export default Counter;
