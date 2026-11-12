import { Component } from "react";
import './index.css'

class LettersCount extends Component {
    state = {
        count:0
    }

    onCalculate = (event) => {
        const searchinput = event.target.value;
        const count = searchinput.length;
        this.setState({
            count:count
        })
    }
    render () {
        const {count} = this.state;
        return (
            <div className="background">
            <div className="left">
                <h1 className="heading">Calculate the letters you enter</h1>
                <label className="label">Enter letters</label>
                <p><input type="text" className="user-input" onChange={this.onCalculate} placeholder="enter your phrase"/></p>
                <button className="letters-count" >No of letters {count}</button>
            </div>
            <div className="right">
                <img src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png" className="calculator-img"/>
            </div>
            </div>
        )
    }
}

export default LettersCount