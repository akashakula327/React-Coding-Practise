import { Component } from "react";
import '../index.css'

class DarkMode extends Component {
    state = {
        isDark:true
    }
    changeDark = () => {
        this.setState(prevState=>({
            isDark:!prevState.isDark
        }))
        console.log(this.state)
    }
    render() {
        const {isDark} = this.state;
        let backgroundColor,color,text;
        if(isDark) {
            backgroundColor="black"
            color = "white"
            text="Dark"
        }
        else {
            backgroundColor="white"
            color="black"
            text="Light"
        }
        return(
            <div className="background">
                <div className="card" style={{backgroundColor:backgroundColor}}>
                    <h1 className="heading" style={{color:color}}>Click to change mode</h1>
                    <button className="button" onClick={this.changeDark}>{text}</button>
                </div>
            </div>
        )
    }
}

export default DarkMode;