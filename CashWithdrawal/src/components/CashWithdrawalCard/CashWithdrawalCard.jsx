import { Component } from "react";
import DenominationCard from "../DenominationCard/DenominationCard.jsx";
import './index.css'

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]


class CashWithderawalCard extends  Component {
    state = {
        balance:2000
    }
    cashWithdrawal = (value) => {
        const {balance} = this.state;
        if(balance>0) {
            this.setState(previousState=>({
            balance:previousState.balance-value
        }))
        }
    }
    render() {
        return(
            <div className="card">
                <div className="row">
                    <div className="profile">S</div>
                    <p className="profile-name">Sarah Williams</p>
                </div>
                <div className="row-2">
                    <p className="secondary">Your balance</p>
                    <h1 className="balance">{this.state.balance}</h1>
                </div>
                <p className="rupees">Rupees</p>
                <h1 className="withdraw-text">Withdraw</h1>
                <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
                <div className="center">
            {denominationsList.map(each=> {
                return <DenominationCard denominationsList={each} cashWithdrawal={this.cashWithdrawal} />
            })}
            </div>
            </div>
        )
    }
}

export default CashWithderawalCard