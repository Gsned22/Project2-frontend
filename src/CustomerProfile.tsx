import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Token } from 'aws-sdk';

function CustomerProfile() {
    
    const [username, setUsername] = useState('');
    const [street_address, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode1, setZipcode1] = useState(0);
    const [email, setEmail] = useState('');
    const [full_name, setFullName] = useState('');
    const [profile_picture, setProfilePicture] = useState('');
    const [password, setPassword] = useState();
    const [phone_number, setPhoneNumber] = useState(0);
    const [last4digits, setLast4digits] = useState(0);
    const [expiration, setExpiration] = useState(0);
    const [security_code, setSecurityCode ] = useState(0);
    const [zipcode2, setZipcode2] = useState(0);
    
    useEffect(() => {
        retrieveCustomerProfile();
    }, [])

    async function retrieveCustomerProfile() {
        const response = await axios.get('http://127.0.0.1:8080/customer/profile', {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`

            }
        });
        
        setUsername(response.data.username)
        setStreetAddress(response.data.address.street_address)
        setCity(response.data.address.city)
        setState(response.data.address.state)
        setZipcode1(response.data.address.zipcode1)
        setEmail(response.data.email)
        setFullName(response.data.full_name)
        setProfilePicture(response.data.profile_picture)
        setPassword(response.data.password)
        setPhoneNumber(response.data.phone_number)
        setLast4digits(response.data.credit_card_info.last4digits)
        setExpiration(response.data.credit_card_info.expiration)
        setSecurityCode(response.data.credit_card_info.security_code)
        setZipcode2(response.data.credit_card_info.zipcode2)
        
        // setCustomerProfile(response.data);
        // console.log(response.data);
      
    }


    function handleEditInput(event: React.FormEvent<HTMLInputElement>) {
        setUsername(event.currentTarget.value);
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
                                            <input type="text" className="form-control" id="fullName" value ={full_name} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="eMail">Email</label>
                                            <input type="email" className="form-control" id="eMail" value ={email} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input type="number" className="form-control" id="phone" value = {phone_number}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="website">Profile Picture URL</label>
                                            <input type="url" className="form-control" id="website" value = {profile_picture} />
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
                                            <input type="name" className="form-control" id="Street" value = {street_address} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="ciTy">City</label>
                                            <input type="name" className="form-control" id="ciTy" value={city} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="sTate">State</label>
                                            <input type="text" className="form-control" id="sTate" value ={state}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="zIp">Zip Code</label>
                                            <input type="text" className="form-control" id="zIp" value ={zipcode1} />
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
                                            <input type="name" className="form-control" id="last4digits" value = {last4digits} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="expiration">Expiration Date</label>
                                            <input type="name" className="form-control" id="expiration" value = {expiration} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="securityCode">Security Code</label>
                                            <input type="text" className="form-control" id="securityCode" value = {security_code} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="zIpCode">Zip Code</label>
                                            <input type="text" className="form-control" id="zIpCode" value = {zipcode2} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="text-right">
                                            <button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button>
                                            <button type="submit" id="submit" name="submit" className="btn btn-primary"  >Update</button>
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

export default CustomerProfile;