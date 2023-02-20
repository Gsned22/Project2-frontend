import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Token } from 'aws-sdk';
import jwtDecode from 'jwt-decode';

function EditCustomerProfile() {

    const [username, setUsername] = useState('');
    const [street_address, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode1, setZipcode1] = useState(0);
    const [email, setEmail] = useState('');
    const [full_name, setFullName] = useState('');
    const [profile_picture, setProfilePicture] = useState('');
    const [password, setPassword] = useState('');
    const [phone_number, setPhoneNumber] = useState(0);
    const [card_number, setCardNumber] = useState(0);
    const [expiration, setExpiration] = useState(0);
    const [security_code, setSecurityCode] = useState(0);
    const [zipcode2, setZipcode2] = useState(0);
    const navigate = useNavigate();

    // useEffect(() => {
    //     retrieveCustomerProfile();
    // }, [])
    async function updateProfile() {
        try {
            const response = await axios.patch(`http://127.0.0.1:8080/update/profile`,
                {
                    "username": username,
                    'street_address': street_address,
                    'city': city,
                    'state': state,
                    'zipcode1': zipcode1,
                    'expiration': expiration,
                    'card_number': card_number,
                    'security_code': security_code,
                    'zipcode2': zipcode2,
                    'email': email,
                    'full_name': full_name,
                    'profile_picture': profile_picture,
                    'password': password,
                    'phone_number': phone_number
                },
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
                console.log(Headers);
            if (response.status === 200) {
                const message = response.data.message;
                console.log(response);
                alert(message);
                return navigate('/customer/profile')
            }
        } catch (err: any) {
            alert(err.response.data.message);
        }
    }





    return (
        <>
           <div className="container">
                <div className="row gutters">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="card h-100">
                            <div className="card-body" id="profilePage">
                                <div className="account-settings">
                                    <div className="user-profile">
                                        <div className="user-avatar">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" /> 
                                        </div>
                                        <h5 className="user-name">{username}</h5>
                                        <h6 className="user-email">{email}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div className="card h-100">
                            <div className="card-body1">
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mb-2 text-primary">Personal Details</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="fullName">Full Name</label>
                                            <input type="text" className="form-control" id="fullName" defaultValue ={full_name} onChange={(e) => { setFullName(e.target.value)}}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="eMail">Email</label>
                                            <input type="email" className="form-control" id="eMail" defaultValue ={email} onChange={(e) => { setEmail(e.target.value)}}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input type="number" className="form-control" id="phone" defaultValue = {phone_number} onChange={(e) => { setPhoneNumber(Number(e.target.value))}}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="website">Password</label>
                                            <input type="text" className="form-control" id="website" defaultValue = {password} onChange={(e) => { setPassword(e.target.value)}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mt-3 mb-2 text-primary">Address</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="Street">Street Adress</label>
                                            <input type="name" className="form-control" id="Street" defaultValue = {street_address} onChange={(e) => { setStreetAddress(e.target.value)}}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="ciTy">City</label>
                                            <input type="name" className="form-control" id="ciTy" defaultValue ={city} onChange={(e) => { setCity(e.target.value)}}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="sTate">State</label>
                                            <input type="text" className="form-control" id="sTate" defaultValue  ={state} onChange={(e) => { setState(e.target.value)}}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="zIp">Zip Code</label>
                                            <input type="text" className="form-control" id="zIp" defaultValue  ={zipcode1} onChange={(e) => { setZipcode1(Number(e.target.value))}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mt-3 mb-2 text-primary">Credit Card Information</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="last4digits">Last 4 digits of credit card</label>
                                            <input type="name" className="form-control" id="last4digits" defaultValue  = {card_number} onChange={(e) => { setCardNumber(Number(e.target.value))}}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="expiration">Expiration Date</label>
                                            <input type="name" className="form-control" id="expiration" defaultValue  = {expiration} onChange={(e) => { setExpiration(Number(e.target.value))}}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="securityCode">Security Code</label>
                                            <input type="text" className="form-control" id="securityCode" defaultValue  = {security_code} onChange={(e) => { setSecurityCode(Number(e.target.value))}}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="zIpCode">Zip Code</label>
                                            <input type="text" className="form-control" id="zIpCode" defaultValue = {zipcode2} onChange={(e) => { setZipcode2(Number(e.target.value))}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="text-right">
                                            {/* <button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button> */}
                                            <button type="submit" id="submit" name="submit" className="btn btn-primary" onClick={updateProfile} >Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditCustomerProfile;