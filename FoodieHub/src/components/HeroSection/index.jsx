import { Component } from "react";
import './index.css'

class HeroSection extends Component {
    onSearchInput = (event) => {
        const {onSearchInput} = this.props;
        const searchInput = event.target.value;
        onSearchInput(searchInput)
    }
    render () {
        return(
            <div className="hero-section">
            <h1 className="hero-heading">Delicious Food, Delivered Fresh.</h1>
            <p className="description">Explore mouth-watering dishes, discover your favorites, and enjoy delicious meals made just for you.</p>
            <p><input className="search-input" onChange={this.onSearchInput} placeholder="Search for your favorite food..." type="search"/></p>
            <button className="explore-btn">Explore More</button>
            </div>
        )
    }
}

export default HeroSection