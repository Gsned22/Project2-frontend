import React, { useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleUsernameInput(event: React.FormEvent<HTMLInputElement>) {
        setUsername(event.currentTarget.value);
    }

    function handlePasswordInput(event: React.FormEvent<HTMLInputElement>) {
        setPassword(event.currentTarget.value);
    }

    async function login() {
        try {
            const response = await axios.post('http://127.0.0.1:8080/login', { "username": username, "password": password });                  
            const token = response.data.token;
            const message = response.data.message;
            localStorage.setItem('token', token);
            alert(message);
            const payload: { iat: number, role: string, username: string } = jwtDecode(token); // extracts the payload of the token
            if (payload.role === 'user') {
                // redirect to /user route
                return navigate("/");
            } else if (payload.role === 'admin') {
                // redirect to /guest route
                return navigate("/admin");
            }   
        } catch (err: any) {
            alert(err.response.data.message);
        }
    }

    async function resetPassword(){
        return navigate("/reset/password")
    }

    async function continueAsGuest() {
        try {
            const response = await axios.get('http://127.0.0.1:8080/login');                  
            const token = response.data.token;
            const message = response.data.message;
            localStorage.setItem('token', token);
            alert(message);
            return navigate("/");
        } catch (err: any) {
            alert(err.response.data.message);
        }
    }

    return (
        <div className='loginClass'>
           <h1>Login</h1> 
           <form onSubmit={(event) => { event.preventDefault() }}>
                <div className='usernameAndPassword'>
                    <label className='usernameAndPasswordText' htmlFor="username">Username</label>
                    <input value={username} type="text" id="username" name="username" onChange={handleUsernameInput} />
                </div>
                <div className='usernameAndPassword'>
                    <label className='usernameAndPasswordText' htmlFor="password">Password</label>
                    <input value={password} type="password" id="password" name="password" onChange={handlePasswordInput} />
                </div>
                <button onClick={login}>Login</button>
                <button onClick={() => { resetPassword() }}>Reset Password</button>
                <button onClick={() => { continueAsGuest() }}>Continue as Guest</button>
           </form>
        </div>
    )
}

export default Login;
