import { Component } from "react";
import './index.css'




class ContactItem extends Component {
  onFavourite = () => {
    const {onClickFavourite,initialContactsList,isFavorite} = this.props;
    const {id,name,mobileNo} = initialContactsList
    onClickFavourite(id)
  } 
    render() {
        const {initialContactsList} = this.props;
        const {id,name,mobileNo,isFavorite} = initialContactsList
        return(
             <li className="table-row">
      <div className="table-cell name-column">
        <p>{name}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell mobile-no-column">
        <p className="mobile-no-value">{mobileNo}</p>
        <button
  type="button"
  className="favorite-icon-container"
  onClick={this.onFavourite}
>
  <img
    src={
      isFavorite
        ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'
    }
    className="favorite-icon"
    alt=""
  />
</button>
      </div>
    </li>
        )
    }
}

export default ContactItem