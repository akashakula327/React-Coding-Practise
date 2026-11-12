import { Component } from "react";
import './index.css'

class ThankYou extends Component {
    render () {
        return(
            <div className="thankyou-card">
                <img src='https://assets.ccbp.in/frontend/react-js/love-emoji-img.png' className="love-image"/>
            <h1 className="heading">Thankyou</h1>
            <p>We will ue your feedback to improve our customer support</p>
            </div>
        )
    }
}

export default ThankYou