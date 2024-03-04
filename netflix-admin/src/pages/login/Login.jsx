import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/authContext/AuthContext'
import { login } from '../../context/authContext/apiCalls';
import logo from '../../assests/Netflix-Symbol.png'
import './login.css'
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isFetching, dispatch } = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault();
        login({ email, password }, dispatch);
    }

    return (
        <>
            <div className='login'>
                <form className='loginForm' >
                    <img className='logoDesign' src={logo} alt='' />
                    <input
                        type='text'
                        className='loginInput'
                        placeholder='email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type='password'
                        className='loginInput'
                        placeholder='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className='loginButton'
                        onClick={handleLogin}
                        disabled={isFetching}
                    >Login</button>
                </form>
            </div>

        </>

    )
}


