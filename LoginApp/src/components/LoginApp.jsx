import {Component} from 'react'
import '../index.css'

class LoginApp extends Component {
    state ={
        isLogin:false
    }

    onLogin = () => {
        this.setState(prevState=> ({
            isLogin:!prevState.isLogin
        }))
    }
    render () {
        const {isLogin} = this.state;
        let headingText,buttonText;
        headingText = isLogin ? "Welcome User" : "Please Login";
        buttonText = isLogin ? "Logout" : "Login"
        return(
            <div className='background'>
                <div className='card'>
                    <h1 className='heading'>{headingText}</h1>
                    <button className='login-btn' onClick={this.onLogin}>{buttonText}</button>
                </div>
            </div>
        )
    }
}

export default LoginApp;