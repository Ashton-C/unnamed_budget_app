import React from 'react';
import './styles.css';

class Login extends React.Component {
    render() {
        return (
            <div className='Login'>
                <div className='Header'>{this.props.name}</div>
                <form action='/login' className='LoginForm' method='post'>
                    <ul>
                        <li className='LoginInput' id='username'>
                            <input type='text' id='usernameIn' placeholder="Username"></input>
                        </li>
                        <li className='LoginInput' id='password'>
                            <input type='password' id='passwordIn' placeholder='Password'></input>
                            <br />
                            {/* <a href='/forgot-password'>Forgot Password?</a> */}
                        </li>
                        {/* <input type='checkbox' id='remember' />
                        <label for='remember'>Remember me?</label> */}
                    </ul>
                    <button className='LoginButton' id='sendLogin'>Login</button>
                    {/* <button className='LoginButton' id='createAccount'>Create Account</button> */}

                </form>

            </div>
        )
    }
}
export default Login;