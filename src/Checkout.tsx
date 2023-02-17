import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Checkout() {

    const [full_name, setFull_Name] = useState('');
    const [street_address, setStreet_Address] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode1, setZipcode1] = useState(0);
    const [expiration, setExpiration] = useState(0);
    const [card_number, setCard_Number] = useState(0);
    const [security_code, setSecurity_Code] = useState(0);
    const [zipcode2, setZipcode2] = useState('');

    const navigate = useNavigate();

    function backToCart() {  
        return navigate("/cart");
    }

    async function submitPurchase() {
        try {
            const response = await axios.post('http://127.0.0.1:8080/orders', { "full_name": full_name, "street_address": street_address, "city": city, "state": state, "zipcode1": zipcode1,
                "expiration": expiration, "card_number": card_number, "security_code": security_code, "zipcode2": zipcode2 }, {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`                    }
            } );
            const message = response.data.message;
            alert(message);
            return navigate("/confirmation");
        } catch (err: any) {
            console.log(err.response.data.message);
            //alert(err.response.data.message);
        }
    }

    return (
        <div id='formContainer'>
            <form onSubmit={(event) => { event.preventDefault() }}>
                <h1>Please Enter Your Information Here</h1>
                <label className='placeOrderLabel' htmlFor="full_name">Full Name</label>
                <input className='placeOrderInput' onChange={(e) => { setFull_Name(e.currentTarget.value) }} value={full_name} type="text" id="full_name" name="full_name" /><br />
                <h2>Please enter your address below:</h2>
                <label className='placeOrderLabel' htmlFor="street_address">Street Address</label>
                <input className='placeOrderInput' onChange={(e) => { setStreet_Address(e.currentTarget.value) }} value={street_address} type="text" id="street_address" name="street_address" /><br />            
                <label className='placeOrderLabel' htmlFor="city">City</label>
                <input className='placeOrderInput' onChange={(e) => { setCity(e.currentTarget.value) }} value={city} type="text" id="city" name="city" /><br />
                <label className='placeOrderLabel' htmlFor="state">State</label>
                <input className='placeOrderInput' onChange={(e) => { setState(e.currentTarget.value) }} value={state} type="text" id="state" name="state" /><br />
                <label className='placeOrderLabel' htmlFor="zipcode1">Zip Code</label>
                <input className='placeOrderInput' onChange={(e) => { setZipcode1(Number(e.currentTarget.value)) }} value={zipcode1} type="number" id="zipcode1" name="zipcode1" /><br />
                <h2>Please enter your credit card info below:</h2>
                <label className='placeOrderLabel' htmlFor="expiration">Expiration</label>
                <input className='placeOrderInput' onChange={(e) => { setExpiration(Number(e.currentTarget.value)) }} value={expiration} type="number" id="expiration" name="expiration" /><br />                
                <label className='placeOrderLabel' htmlFor="card_number">Credit Card Number</label>
                <input className='placeOrderInput' onChange={(e) => { setCard_Number(Number(e.currentTarget.value)) }} value={card_number} type="number" id="card_number" name="card_number" /><br />
                <label className='placeOrderLabel' htmlFor="security_code">Security Code</label>
                <input className='placeOrderInput' onChange={(e) => { setSecurity_Code(Number(e.currentTarget.value)) }} value={security_code} type="number" id="security_code" name="security_code" /><br />
                <label className='placeOrderLabel' htmlFor="zipcode2">Zip Code</label>
                <input className='placeOrderInput' onChange={(e) => { setZipcode2(e.currentTarget.value) }} value={zipcode2} type="text" id="zipcode2" name="zipcode2" /><br />
                <div className='buttonsOnCheckoutPage'>
                    <button className='returnToCartButton' onClick={() => { backToCart() }}>Return to Your Cart</button>
                    <button className='purchaseItemsButton' onClick={() => { submitPurchase() }}>Submit Purchase</button>
                </div>
            </form>
        </div>
    )
}

export default Checkout