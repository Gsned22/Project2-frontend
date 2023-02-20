import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {

    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    function handleEmailInput(event: React.FormEvent<HTMLInputElement>) {
        setEmail(event.currentTarget.value);
    }

 
    async function resetPassword() {
        try {
            const response = await axios.post('http://127.0.0.1:8080/password', { "email": email});
            const message = response.data.message;
            alert(message);
            if (response.status === 200) {
                return navigate("/new/password");
            } else{
                return alert(message);
            }   
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className='loginClass'>
           <h1>Reset Password</h1> 
           <form onSubmit={(event) => { event.preventDefault() }}>
                <div className='usernameAndPassword'>
                    <label className='usernameAndPasswordText' htmlFor="username">Email</label>
                    <input value={email} type="text" id="username" name="username" onChange={handleEmailInput} />
                </div>
                <button onClick={resetPassword}>send reset email</button>
           </form>
        </div>
    )
}

export default ResetPassword;
