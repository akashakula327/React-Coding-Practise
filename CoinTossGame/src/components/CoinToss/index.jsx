import { Component } from "react";
import './index.css'

class CoinToss extends Component {
    state={
        tossResult:0,
        headsCount:0,
        tailsCount:0
    }
    onTossCoin = () => {
        const tossResult = Math.floor(Math.random()*2)
        this.setState(prevState=>({
            tossResult:tossResult,
            headsCount:tossResult===1 ? prevState.headsCount+1:prevState.headsCount,
            tailsCount:tossResult===0 ? prevState.tailsCount+1:prevState.tailsCount
        }))
    }
    render() {
        const {tossResult,headsCount,tailsCount} = this.state;
        return(
            <div className="background">
                <div className="card">
                    <h1 className="card-heading">Coin Toss Game</h1>
                    <p className="card-sub-heading">Heads or Tails</p>
                    {tossResult===1 ? <img className="coin-image" src="https://assets.ccbp.in/frontend/react-js/heads-img.png"/> : <img className="coin-image" src="https://assets.ccbp.in/frontend/react-js/tails-img.png"/>}
                    <button className="toss-coin-btn" onClick={this.onTossCoin}>Toss coin</button>
                    <div className="row">
                        <p className="count-item">Total: {headsCount+tailsCount}</p>
                        <p className="count-item">Heads: {headsCount}</p>
                        <p className="count-item">Tails: {tailsCount}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CoinToss