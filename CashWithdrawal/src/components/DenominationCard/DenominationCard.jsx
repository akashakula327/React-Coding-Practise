import { Component } from "react";
import './index.css'

 class DenominationCard extends Component {
    onCashWithdrawal = () => {
        const {cashWithdrawal,denominationsList} = this.props;
        const {value} = denominationsList
        cashWithdrawal(value)
    }
    render() {
        const {denominationsList} = this.props;
        const {id,value} = denominationsList;
        return(
            <>
            <button className="cash-btn" id={id} onClick={this.onCashWithdrawal}>{value}</button>
            </>
        )
    }
 }

 export default DenominationCard