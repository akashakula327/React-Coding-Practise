import { Component } from "react";
import '../index.css'

class Counter extends Component {
    state={
        count:2
    }
     onIncrement = () => {
        this.setState(prevState=> ({
            count:prevState.count+1
        }))
    }
    onReset = () => {
        this.setState(prevState=> ({
            count:0
        }))
    }

  render() {
    return (
      <div>
        <h1 className="heading">I clicked {this.state.count} times</h1>

        <button onClick={this.onIncrement}>
          Increase
        </button>
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}

export default Counter;