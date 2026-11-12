import { Component } from "react";
import ThankYou from "../ThankYouCard/ThankYou.jsx";
import './index.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

class Feedback extends Component {
    state = {
        flag:true
    }

    submitFeedback = () => {
      this.setState(prevState=>({
        flag:!prevState.flag
      }))
    }
    render () {
        const {emojis} = resources
        return(
            <>
            {this.state.flag ? (<div className="feedback-card">
            <h1 className="card-heading">How satisfied are you with our customer support performance</h1>
            <div className="reactions">
            {emojis.map(each=> {
                return(
                    <div className="reaction" id={each.id}>
                    <img src={each.imageUrl} onClick={this.submitFeedback} className="emoji"/>
                    <p className="reaction-name">{each.name}</p>
                </div>
                )
            })}
            </div>
            </div>):(<ThankYou/>) }
            </>
        )
    }
}

export default Feedback