import { Component } from "react";
import '../index.css'

class ShowHide extends Component {
    state = {
        first:true,
        last:true
    }

    showHideFirstName = () => {
        this.setState(prevState => ({
            first:!prevState.first
        }))
    }
    showHideLastName = () => {
        this.setState(prevState=> ({
            last:!prevState.last
        }))
    }

    render() {
        const{first,last} = this.state;
        let firstContainer,lastContainer;
        if(first) {
            firstContainer=<div className="card"><h1>John</h1></div>
        }
        else {
            firstContainer=""
        }

        if(last) {
            lastContainer = <div className="card"><h1>Calibar</h1></div>
        }
        else {
            lastContainer=""
        }
        return(
            <div className="background">
                <div>
                <h1 className="heading">Show/Hide</h1>
                <div>
                    <button className="button" onClick={this.showHideFirstName}>Show/Hide FirstName</button>
                    <button className="button" onClick={this.showHideLastName}>Show/Hide LastName</button>
                </div>
                <div className="row">
                    {firstContainer}
                    {lastContainer}
                </div>
                </div>
            </div>
        )
    }
}

export default ShowHide;