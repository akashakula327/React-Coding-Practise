import { Component } from "react";
import './index.css'

class HistoryItem extends Component {
    onDelete = () => {
        const {deleteItem,initialHistoryList} = this.props;
        const {id} = initialHistoryList
        deleteItem(id)
    }
    render () {
        const {initialHistoryList} = this.props;
        const {id,timeAccessed,logoUrl,title,domainUrl} = initialHistoryList;
        return(
            <li className="history-item" id={id}>
            <p className="time">{timeAccessed}</p>

            <div className="row">
            <div className="row-2">
            <img src={logoUrl} className="history-item-logo"/>
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
            </div>
            <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" onClick={this.onDelete} className="delete"/>
            </div>
            </li>
        )
    }
}

export default HistoryItem