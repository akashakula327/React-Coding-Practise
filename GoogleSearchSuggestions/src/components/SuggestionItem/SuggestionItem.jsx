import { Component } from "react";
import './index.css'

class SuggestionItem extends Component {
    render () {
        const {suggestionsList} = this.props;
        const {id,suggestion} = suggestionsList
        return(
            <div className="suggestion-item" id={id}>
            <p className="suggestion">{suggestion}</p>
            <img src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png" className="arrow-icon"/>
            </div>
        )
    }
}

export default SuggestionItem