import { Component } from "react";
import './index.css'


class CategoryFilter extends Component {
    state = {
        isActive:'All'
    }
    onButton = (event) => {
        const {categories,onCategoryClick} = this.props;
        this.setState({
            isActive:event.target.id
        })
        onCategoryClick(event.target.id)
        
    }
    render () {
        const {categories,onCategoryClick} = this.props;
        return(
            <div className="category-filter-card">
                <h1 className="heading">What Are You Craving Today?</h1>
                <p className="description">Explore delicious dishes from our popular categories.</p>
                <div className="row">
                    {categories.map(each=> {
                        return <button className={this.state.isActive===each.categoryName ? 'category-btn category-btn-clicked':'category-btn'} id={each.categoryName} onClick={this.onButton}>{each.categoryName}</button>
                    })}
                </div>
                <h1>Our popular dishes</h1>
                <p>Handpicked favorites, made with love.</p>
            </div>
        )
}
}


export default CategoryFilter