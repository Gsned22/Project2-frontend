import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from './formatCurrency';

function Checkout() {

    const navigate = useNavigate();

    async function backToCart() {  
        return navigate("/cart");
    }

    async function submitPurchase() {  

    }

return (
    <>
        <h1>Please Enter Your Information Here</h1>
        <div className='buttonsOnCheckoutPage'><button className='returnToCartButton' onClick={() => { backToCart() }}>Return to Your Cart</button>
            <button className='purchaseItemsButton' onClick={() => { submitPurchase() }}>Submit Purchase</button>
        </div>
    </>
    )
}

export default Checkout