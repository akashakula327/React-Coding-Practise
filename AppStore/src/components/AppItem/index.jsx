import { Component } from "react";
import './index.css'

class AppItem extends Component {
    render() {
        const {appsList} = this.props;
        const {appId,appName,imageUrl,category} = appsList
        return(
            <div className="app-item" id={appId}>
                <img className="app-image" src={imageUrl}/>
                <h2 className="app-name">{appName}</h2>
            </div>
        )
    }
}

export default AppItem