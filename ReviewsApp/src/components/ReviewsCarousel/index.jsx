import { Component } from "react";
import './index.css'

class ReviewCorousel extends Component {
    state = {
        count:0
    }
    onLeftArrow = () => {
        if(this.state.count>1) {
            this.setState(prevState=> ({
                count:prevState.count-1
            }))
        }

    }
    onRightArrow = () => {
        if(this.state.count<3) {
            this.setState(prevState=> ({
                count:prevState.count+1
            }))
        }

    }
    render() {
        console.log(this.state)
        const {reviewsList} = this.props;
        const reviewCard = reviewsList[this.state.count]
        const {imgUrl,username,companyName,description} = reviewCard
        return(
            <div className="background">
            <div className="reviews-card">
                <h1 className="reviews-card-heading">Reviews</h1>
                <img className="reviews-card-image" src={imgUrl}/>
                <div className="row">
                    <img className="left-arrow" onClick={this.onLeftArrow} src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png" alt="left arrow"/>
                    <p className="username">{username}</p>
                    <img className="right-arrow" onClick={this.onRightArrow} src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"/>
                </div>
                <p className="company-name">{companyName}</p>
                <p className="review">{description}</p>
            </div>
            </div>
        )
    }
}

export default ReviewCorousel