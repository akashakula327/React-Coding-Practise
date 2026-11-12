import {Component} from 'react'
import '../index.css'

class Speedometer extends Component {
    state ={
        count:0
    }
    onAccelerate = () => {
        if(this.state.count<200) {
            this.setState(prevState=> ({
            count:prevState.count+10
        }))
        }
    }
    onBrake= () => {
        if(this.state.count>0) {
            this.setState(prevState=> ({
            count:prevState.count-10
        }))
        }
    }
    render () {
        return(
            <div className='background'>
                <div>
                <img src='https://imgs.search.brave.com/qbRHyog3hA58cvEsf-gsw1YTzzhIeyAOLAvSulmV9KY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzIwLzcwLzcyLzQy/LzM2MF9GXzIwNzA3/MjQyNjlfMnhSaWNi/dXc5OFBYbW1iNThJ/N3k0ZmZvd0FJT2Rm/WmkuanBn' className='image'/>
                <h1 className='heading'>Speed is <span>{this.state.count}</span> kmh</h1>
                <p className='description'>Min speed is 0kmh & Max speed is 200kmh</p>
                <div className='row'>
                    <button className='button' onClick={this.onAccelerate}>Accelerate</button>
                    <button className='button' onClick={this.onBrake}>Brake</button>
                </div>
           </div>
           </div>
        )
    }
}

export default Speedometer;