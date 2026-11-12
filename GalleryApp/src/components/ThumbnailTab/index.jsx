import {Component} from 'react'
import './index.css'

class Thumbnail extends Component {

    onClick = () => {
        const {imagesList,onClickImg} = this.props
        const {imageUrl} = imagesList;

        onClickImg(imageUrl)

    }
    render() {
        const {imagesList,onClickImg} = this.props
        const {id,thumbnailUrl,thumbnailAltText} = imagesList;
        return(
            <div className='thumbnail' id={id}>
                <img src={thumbnailUrl} alt={thumbnailAltText} onClick={this.onClick}/>
            </div>
        )
    }
}

export default Thumbnail