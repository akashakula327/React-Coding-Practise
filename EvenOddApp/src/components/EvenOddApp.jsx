import {Component} from 'react'
import '../index.css'

class EvenOddApp extends Component {
    state = {
        count :0
    }
    onIncrement = ()=> {
        let randomNumber = Math.ceil(Math.random()*100);
        this.setState(prevState => ({
            count:prevState.count+randomNumber
        }))
    }
    render() {
        const {count} = this.state;
        let EvenOrOdd;
        EvenOrOdd = count%2==0 ? "Even":"Odd";
        return(
            <div className='background'>
                <div className='card'>
                    <h1 className='heading'>Count {this.state.count}</h1>
                    <p className='description'>count is {EvenOrOdd}</p>
                    <button className='button' onClick={this.onIncrement}>Increment</button>
                    <p>* Increase by random number between 0 to 100</p>
                </div>
            </div>
        )
    }
}

export default EvenOddApp;