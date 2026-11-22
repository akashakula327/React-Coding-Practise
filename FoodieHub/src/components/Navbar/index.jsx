import { Component } from "react";
import {Utensils,Heart,ShoppingCart} from 'lucide-react'
import './index.css'

class Navbar extends Component {
    render () {
        return(
            <navbar className="navbar">
                <div className="row">
            <Utensils className="icon"/>
            <h1 className="logo">Foodie Hub</h1>
            </div>
            <div className="row">
            <Heart className="icon"/>
            <ShoppingCart className="icon"/>
            </div>
            </navbar>
        )
    }
}

export default Navbar