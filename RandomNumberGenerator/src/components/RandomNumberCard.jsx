import { Component } from "react";
import '../index.css'

class RandomNumberCard extends Component {
    state = {
        count:0 
    }
    generate = () => {
        const randomNum = Math.ceil(Math.random()*100);
        this.setState({
            count:randomNum
        })
    }
    render () {
        return(
            <div className="card">
            <h1 className="title">Random Number</h1>
            <p>Generate a random number in the range of 0 to 100</p>
            <button className="button" onClick={this.generate}>Generate</button>
            <h1 className="random-number">{this.state.count}</h1>
            </div>
        )
    }
}

export default RandomNumberCard