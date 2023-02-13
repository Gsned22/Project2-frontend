
import React, { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {

    const [username, setUsername] = useState('');
    const [street_address, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode1, setZipcode1] = useState('');
    const [last4digits, setLast4Digits] = useState('');
    const [expiration, setExpiration] = useState('');
    const [security_code, setSecurityCode] = useState('');
    const [zipcode2, setZipcode2] = useState('');
    const [email, setEmail] = useState('');
    const [full_name, setFullName] = useState('');
    const [profile_picture, setProfilePicture] = useState('');
    const [password, setPassword] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const navigate = useNavigate();
    
   

    function handleUsernameInput(event: React.FormEvent<HTMLInputElement>) {

        setUsername(event.currentTarget.value);

    }

    function handleStreetAddressInput(event: React.FormEvent<HTMLInputElement>) {


        setStreetAddress(event.currentTarget.value);
    }


    function handleCityInput(event: React.FormEvent<HTMLInputElement>) {


        setCity(event.currentTarget.value);

    }

    function handleStateInput(event: React.FormEvent<HTMLInputElement>) {


        setState(event.currentTarget.value);
    }

    function handleZipcode1(event: React.FormEvent<HTMLInputElement>) {


        setZipcode1(event.currentTarget.value);

    }

    function handleLast4DigitsInput(event: React.FormEvent<HTMLInputElement>) {


        setLast4Digits(event.currentTarget.value);

    }

    function handleExpirationInput(event: React.FormEvent<HTMLInputElement>) {


        setExpiration(event.currentTarget.value);

    }

    function handleSecurityCodeInput(event: React.FormEvent<HTMLInputElement>) {


        setSecurityCode(event.currentTarget.value);

    }

    function handleZipcode2(event: React.FormEvent<HTMLInputElement>) {


        setZipcode2(event.currentTarget.value);

    }


    function handelEmailInput(event: React.FormEvent<HTMLInputElement>) {


        setEmail(event.currentTarget.value);
    }

    function handleFullNameInput(event: React.FormEvent<HTMLInputElement>) {


        setFullName(event.currentTarget.value);
    }

    function handlePasswordInput(event: React.FocusEvent<HTMLInputElement>) {


        setPassword(event.currentTarget.value);

    }

    function handlePhoneNumberInput(event: React.FormEvent<HTMLInputElement>) {


        setPhoneNumber(event.currentTarget.value);

    }

    function handleProfilePictureInput(event: React.FormEvent<HTMLInputElement>) {


        setProfilePicture(event.currentTarget.value);
    }

    async function newRegister() {


        try {

            const response = await axios.post('http://127.0.0.1:8080/register', {
                'username': username,
                'street_address': street_address,
                'city': city, 'state': state, 'zipcode1': zipcode1,
                'last4digits': last4digits, 'expiration': expiration,
                'security_code': security_code,
                'zipcode2': zipcode2, 'email': email,
                'full_name': full_name, 'profile_picture': profile_picture,
                'password': password, 'phone_number': phone_number

            });

            if (response.status === 200) {

                const message = response.data.message;
                console.log(response);
                alert(message);
                return navigate('/')
            }
      
        } catch (err) {

            alert(err)
        }

    }

   
    return (

        <Container>
            <Wrapper>
                <Form onSubmit={(event: any) => {event.preventDefault()}} >

                    <InputWrapper>
                        <Label htmlFor='username' >Username</Label>
                        <Input value={username} type='text' id='username' name='username' onChange={handleUsernameInput} />
                        <Label htmlFor='address' >Address</Label>
                        <Input value={street_address} type='text' id='street_address' name='street_address' onChange={handleStreetAddressInput} />
                        <Label htmlFor='city' >City</Label>
                        <Input value={city} type='text' id='city' name='city' onChange={handleCityInput} />
                        <Label htmlFor='state' >State</Label>
                        <Input value={state} type='text' id='state' name='state' onChange={handleStateInput} />
                        <Label htmlFor='zip_code' >Zip Code</Label>
                        <Input value={zipcode1} type='text' id='zip_code' name='zip_code' onChange={handleZipcode1} />
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor='credit_card_number' >Credit Card Number</Label>
                        <Input value={last4digits} type='text' id='credit_card_info' name='credit_card_info' onChange={handleLast4DigitsInput} />
                        <Label htmlFor='expiration' >Expiration</Label>
                        <Input value={expiration} type='text' id='expiration' name='expiration' onChange={handleExpirationInput} />
                        <Label htmlFor='security_code' >Security Code</Label>
                        <Input value={security_code} type='text' id='security_code' name='security_code' onChange={handleSecurityCodeInput} />
                        <Label htmlFor='zip_code' >Zip Code</Label>
                        <Input value={zipcode2} type='text' id='zip_code' name='zip_code' onChange={handleZipcode2} />
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor='email' >Email</Label>
                        <Input value={email} type='text' id='email' name='email' onChange={handelEmailInput} />
                        <Label htmlFor='password' >Full Name</Label>
                        <Input value={full_name} type='text' id='full_name' name='full_name' onChange={handleFullNameInput} />
                        <Label htmlFor='password' >Password</Label>
                        <Input value={password} type='text' id='password' name='password' onChange={handlePasswordInput} />
                        <Label htmlFor='phone_number' >Telephone</Label>
                        <Input value={phone_number} type='text' id='phone_number' name='phone_number' onChange={handlePhoneNumberInput} />
                        <Label htmlFor='profile_picture' >Profile Picture</Label>
                        <Input value={profile_picture} type='text' id='profile_picture' name='profile_picture' onChange={handleProfilePictureInput} />
                    </InputWrapper>
                    <ButtonWrapper>
                        <Button type='submit' onClick={newRegister} >Register</Button>
                    </ButtonWrapper>
                </Form>
            </Wrapper>
        </Container>


    )
}

export default Register;

const Container = styled.div`
height: 100vh;
width: 100vw;
text-align: center;
background-color: #17777e;
display: flex;
justify-content: center;
align-items: center;
background-image: linear-gradient(10deg, #d4d47a, #fcedfc, 28%, #85e0ec);
border: 1px;

`
const Wrapper = styled.div`
display: flex;
padding: 50px;
max-height: 400px;
border-radius: 20px;
align-items: center;
flex-direction: column;
border: 1px;
border-color: white;
margin-top: -200px;
    
`

const Form = styled.form`
display: flex;
//flex-direction: column;
justify-content: center;
align-items: center;
padding: 5rem;
    
`

const InputWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
  

`

const Label = styled.label`
display: flex;
font-size: 12px;
color: gray;
margin-left: 10px;
`

const Input = styled.input`
padding: 0.5rem;
margin: 0.5rem 0.25rem;
border-radius: 5px;
border: none;
`
const Button = styled.button`
background-color: #80cbc4;
box-shadow: 0 0 10px 0 rgba(0,0,0,0.3);
border-color: #fff;
border-radius: 10px;
width: 150px;
height: 30px;
cursor: pointer;
    
`
const ButtonWrapper = styled.div`
margin-top: 20px;
margin-left: 10px;

`
