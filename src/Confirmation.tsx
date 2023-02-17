import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Confirmation() {

    const navigate = useNavigate();

    function returnToProducts() {  
        return navigate("/");
    }

    function goToUserProfile() {  
        return navigate("/customer/profile");
    }

    return (
    <>
        <h1>Thank you for your order!</h1>
        <div className='buttonsOnConfirmationPage'>
            <button className='returnToProductsButton' onClick={() => { returnToProducts() }}>Shop More</button>
            <button className='goToUserProfileButton' onClick={() => { goToUserProfile() }}>Go to Your User Profile</button>
        </div>
    </>
    )
}

export default Confirmation