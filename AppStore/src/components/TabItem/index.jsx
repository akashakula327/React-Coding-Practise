import {Component} from 'react'
import './index.css'

class TabItem extends Component {
    onClickTabItem = () => {
        const {tabsList,onClickTab} = this.props;
        const {tabId} = tabsList
        onClickTab(tabId)
    }
    render() {
        const {tabsList,isActive} = this.props;
        const {tabId} = tabsList;
        const activeTabClass = isActive ? "active-tab" : "";

        return(
            <div className={`tab ${activeTabClass}`}>
            <p onClick={this.onClickTabItem}>{tabId}</p>
            </div>
        )
    }
}

export default TabItem