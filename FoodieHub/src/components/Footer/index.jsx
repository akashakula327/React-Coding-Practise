import { Component } from "react";
import './index.css'

class Footer extends Component {
    render () {
        return(
            <div className="footer-card">
            <h1 className="footer-heading">Foodie<span>Hub</span></h1>
            <h2 className="footer-sub-heading">Good Food. Great Mood.</h2>
            <p className="footer-description">Bringing delicious flavors and happy moments to your table.</p>
            <hr/>
            <p className="policy">Privacy Policy  Terms  Contact</p>
            <p className="copyrights">© 2026 FoodieHub. All rights reserved.</p>
            </div>
        )
    }
}

export default Footer