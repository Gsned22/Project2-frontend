import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Checkout() {

    const [full_name, setFull_Name] = useState('');
    const [street_address, setStreet_Address] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode1, setZipcode1] = useState(0);
    const [expiration, setExpiration] = useState(0);
    const [card_number, setCard_Number] = useState(0);
    const [security_code, setSecurity_Code] = useState(0);
    const [zipcode2, setZipcode2] = useState(0);

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
            alert(err.response.data.message);
        }
    }

    return (
        <>
        <h1>Please Enter Your Information And Click Submit Purchase</h1>
        <Container>
            <Wrapper>
                <Form onSubmit={(event) => { event.preventDefault() }}>
                <InputWrapper>
                    <h2>Please Enter Your Full Name Here</h2>
                    <Label className='placeOrderLabel' htmlFor="full_name">Full Name</Label>
                    <Input className='placeOrderInput' onChange={(e) => { setFull_Name(e.currentTarget.value) }} value={full_name} type="text" id="full_name" name="full_name" /><br />
                </InputWrapper>
                <InputWrapper>
                     <h2>Please enter your address below:</h2>
                    <Label className='placeOrderLabel' htmlFor="street_address">Street Address</Label>
                    <Input className='placeOrderInput' onChange={(e) => { setStreet_Address(e.currentTarget.value) }} value={street_address} type="text" id="street_address" name="street_address" /><br />            
                    <Label className='placeOrderLabel' htmlFor="city">City</Label>
                    <Input className='placeOrderInput' onChange={(e) => { setCity(e.currentTarget.value) }} value={city} type="text" id="city" name="city" /><br />
                    <Label className='placeOrderLabel' htmlFor="state">State</Label>
                    <Input className='placeOrderInput' onChange={(e) => { setState(e.currentTarget.value) }} value={state} type="text" id="state" name="state" /><br />
                    <Label className='placeOrderLabel' htmlFor="zipcode1">Zip Code</Label>
                    <Input className='placeOrderInput' onChange={(e) => { setZipcode1(Number(e.currentTarget.value)) }} value={zipcode1} type="number" id="zipcode1" name="zipcode1" /><br />
                </InputWrapper>
                <InputWrapper>                
                <h2>Please enter your credit card info below:</h2>
                    <Label className='placeOrderLabel' htmlFor="expiration">Expiration</Label>
                    <Input className='placeOrderInput' onChange={(e) => { setExpiration(Number(e.currentTarget.value)) }} value={expiration} type="number" id="expiration" name="expiration" /><br />                
                    <Label className='placeOrderLabel' htmlFor="card_number">Credit Card Number</Label>
                    <Input className='placeOrderInput' onChange={(e) => { setCard_Number(Number(e.currentTarget.value)) }} value={card_number} type="number" id="card_number" name="card_number" /><br />
                    <Label className='placeOrderLabel' htmlFor="security_code">Security Code</Label>
                    <Input className='placeOrderInput' onChange={(e) => { setSecurity_Code(Number(e.currentTarget.value)) }} value={security_code} type="number" id="security_code" name="security_code" /><br />
                    <Label className='placeOrderLabel' htmlFor="zipcode2">Zip Code</Label>
                    <Input className='placeOrderInput' onChange={(e) => { setZipcode2(Number(e.currentTarget.value)) }} value={zipcode2} type="number" id="zipcode2" name="zipcode2" /><br />
                </InputWrapper>
                <ButtonWrapper>
                    <button className='purchaseItemsButton' onClick={() => { submitPurchase() }}>Submit Purchase</button>
                    <button className='returnToCartButton' onClick={() => { backToCart() }}>Return to Your Cart</button>
                </ButtonWrapper>
                </Form>
            </Wrapper>
        </Container>
        </>
    )
}

export default Checkout;

const Container = styled.div`
height: 30vh;
width: 100vw;
text-align: center;
display: flex;
justify-content: center;
align-items: center;

`
const Wrapper = styled.div`
display: flex;
padding: 70px;
max-height: 400px;
border-radius: 20px;
align-items: center;
flex-direction: column;
margin-top: -140px;
    
`

const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
padding: 6rem;
    
`

const InputWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
  

`

const Label = styled.label`
display: flex;
color:rgb(71, 255, 215);
margin-left: 10px;
`

const Input = styled.input`
padding: 0.5rem;
margin: 0.5rem 0.25rem;
border-radius: 5px;
border: none;
`
    
const ButtonWrapper = styled.div`
margin-top: 20px;
margin-left: 10px;

`