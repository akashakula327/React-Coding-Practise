import { Component } from "react";
import '../index.css'

class FruitsCounter extends Component {
    state={
        mango:0,
        banana:0
    }

    mango =() => {
        this.setState(prevState=> ({
            mango:prevState.mango+1
        }))
    }

    banana = () => {
        this.setState(prevState=> ({
            banana:prevState.banana+1
        }))
    }
    render () {
        return(
            <div className="background">
                <h1 className="heading">Bob ate {this.state.mango} mangoes and {this.state.banana} bananas</h1>
                <div>
                    <img src="https://imgs.search.brave.com/VhYPWkBkLmhy-xGe05A_xPS5cYLdqF6wICo-apewjcg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wODQv/Njc5Lzg5NS9zbWFs/bC9tYW5nby13aXRo/LWdyZWVuLWxlYWYt/aXNvbGF0ZWQtb24t/d2hpdGUtYmFja2dy/b3VuZC1pbGx1c3Ry/YXRpb24tdmVjdG9y/LmpwZw" className="image"/>
                    <img src="https://imgs.search.brave.com/Bu1dG40wYAlpF5MqD1BJdmHXJ0EacMi8On5kD5ijJGo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L2ZyZWUtcGhvdG8v/YmFuYW5hcy13aGl0/ZS1iYWNrZ3JvdW5k/XzExODctMTY3MS5q/cGc_Z2E9R0ExLjEu/MTE4NjczOTUxOS4x/NzkzMzg4MDE1JnNl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MCZxPTgw" className="image"/>
                </div>
                <div>
                    <button className="button" onClick={this.mango}>Mango</button>
                    <button className="button" onClick={this.banana}>Banana</button>
                </div>
            </div>
        )
    }
}

export default FruitsCounter;