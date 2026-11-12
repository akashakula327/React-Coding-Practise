import { Component } from "react";
import './index.css'

class Navbar extends Component {
    onSearch = (event) => {
        const {onSearchHistory} = this.props
        const input = event.target.value;
        onSearchHistory(input)
    }
    render () {
        return(
            <nav className="navbar">
            <img src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png" className="nav-logo"/>
            <div className="center">
            <div className="search-icon">
                <img src="https://assets.ccbp.in/frontend/react-js/search-img.png"/>
            </div>
            <input type="search" onChange={this.onSearch} placeholder="Search History" className="search-input"/>
            </div>
            </nav>
        )
    }
}

export default Navbar