import React, { useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function NewPassword() {

    const [resetToken, setResetToken] = useState('');
    const [username, setUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const navigate = useNavigate();

    function handleResetTokenInput(event: React.FormEvent<HTMLInputElement>) {
        setResetToken(event.currentTarget.value);
    }
    function handleUsernameInput(event: React.FormEvent<HTMLInputElement>) {
        setUsername(event.currentTarget.value);
    }

    function handleNewPasswordInput(event: React.FormEvent<HTMLInputElement>) {
        setNewPassword(event.currentTarget.value);
    }

    async function resetPassword() {
        try {
            const response = await axios.patch('http://127.0.0.1:8080/password', { "resetToken": resetToken, "username": username, "newPassword": newPassword });                  
            const token = response.data.token;
            const message = response.data.message;
            localStorage.setItem('token', token);
            const payload: { iat: number, role: string, username: string } = jwtDecode(resetToken); // extracts the payload of the token
            if (payload.username === username) {
                // redirect to /user route
                return navigate("/login");
            } else{
                // redirect to /guest route
                return alert(message)
            }   
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className='loginClass'>
           <h1>Login</h1> 
           <form onSubmit={(event) => { event.preventDefault() }}>
           <div className='usernameAndPassword'>
                    <label className='usernameAndPasswordText' htmlFor="resetToken">Reset Token</label>
                    <input value={resetToken} type="text" id="resetToken" name="resetToken" onChange={handleResetTokenInput} />
                </div>
                <div className='usernameAndPassword'>
                    <label className='usernameAndPasswordText' htmlFor="username">Username</label>
                    <input value={username} type="text" id="username" name="username" onChange={handleUsernameInput} />
                </div>
                <div className='usernameAndPassword'>
                    <label className='usernameAndPasswordText' htmlFor="password">New Password</label>
                    <input value={newPassword} type="password" id="newPassword" name="newPassword" onChange={handleNewPasswordInput} />
                </div>
                <button onClick={resetPassword}>Reset Password</button>
               
           </form>
        </div>
    )
}

export default NewPassword;
