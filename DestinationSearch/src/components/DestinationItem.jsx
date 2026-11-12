import {Component} from 'react'
import '../index.css'

class DestinationItem extends Component {
    render (){
        const {destinationsList} = this.props
        const {id,name,imgUrl} = destinationsList
        return(
            <div className='card' id={id}>
                <img src={imgUrl} className='card-image'/>
                <p className='card-title'>{name}</p>
            </div>
        )
    }
}

export default DestinationItem;