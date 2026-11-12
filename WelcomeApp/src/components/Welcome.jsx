import { Component } from "react";

class Welcome extends Component {
    state = {
        isSubscribe:true
    }
    onSubscribe = () => {
        this.setState(prevState =>({
            isSubscribe:!prevState.isSubscribe
        }))
        
    }
    render () {
        const{isSubscribe} = this.state;
        let btnText;
        if(isSubscribe) {
            btnText = "Unsubscribe"; 
        }
        else {
            btnText = "Subscribe";
        }
        return(
            <div className="background">
                <div>
                    <h1 className="heading">Welcome</h1>
                    <p className="text">Thank you! Happy Learning</p>
                    <button className="button" onClick={this.onSubscribe}>{btnText}</button>
                </div>
            </div>
        )
    }
}

export default Welcome;