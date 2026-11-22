import {Component} from 'react'
import './index.css'

class FoodCard extends Component {
    render() {
        const {foodItems} = this.props;
        const {id,imageUrl,itemName,price} = foodItems;
        return(
            <div className="food-card">
                <img className="food-card-image" alt="food-card-image" src={imageUrl}/>
                <h1 className="food-card-item-name">{itemName}</h1>
                <p className="food-card-item-price">{price}</p>
                <button className='add-to-cart-btn'>+ Add to cart</button>
            </div>
        )
    }
}

export default FoodCard