import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CustomerProfile() {
    const [customerProfile, setCustomerProfile] = useState<{
        username: string,
        address:{
            street_address: string,
            city: string,
            state: string,
            zipcode1: number}
        credit_card_info:{
            expiration: number,
            last4digits: number,
            security_code: number,
            zipcode2: number},
        email: string,
        full_name: string,
        password: string,
        phone_number: number,
        profile_picture: string,
        role: string
    }>([] as any);
    
    
    useEffect(() => {
        retrieveCustomerProfile();
    }, [])

    async function retrieveCustomerProfile() {
        const response = await axios.get('http://127.0.0.1:8080/customer/profile', {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`

            }

        });

        setCustomerProfile(response.data);
        console.log(response.data);
      
    }
    const city1 = (customerProfile.username)
    console.log(city1)

    async function updateUserProfile() {
        try {

            const response = await axios.patch('http://127.0.0.1:8080/customer/profile', {
                'username': customerProfile.username,
                'street_address': customerProfile.address.street_address,
                'city': customerProfile.address.city, 
                'state': customerProfile.address.state, 
                'zipcode1': customerProfile.address.zipcode1,
                'expiration': customerProfile.credit_card_info.expiration,
                'last4digits': customerProfile.credit_card_info.last4digits,
                'security_code': customerProfile.credit_card_info.security_code,
                'zipcode2': customerProfile.credit_card_info.zipcode2,
                'email': customerProfile.email, 
                'full_name': customerProfile.full_name, 
                'profile_picture': customerProfile.profile_picture,
                'password': customerProfile.password, 
                'phone_number': customerProfile.phone_number

            });

            if (response.status === 200) {

                const message = response.data.message;
                console.log(response);
                alert(message);
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
                            <div className="card-body1">
                                <div className="account-settings">
                                    <div className="user-profile">
                                        <div className="user-avatar">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" /> 
                                        </div>
                                        <h5 className="user-name">{customerProfile.username}</h5>
                                        <h6 className="user-email">{customerProfile.email}</h6>
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
                                            <input type="text" className="form-control" id="fullName" value ={customerProfile.full_name} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="eMail">Email</label>
                                            <input type="email" className="form-control" id="eMail" value ={customerProfile.email} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input type="number" className="form-control" id="phone" value = {customerProfile.phone_number}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="website">Profile Picture URL</label>
                                            <input type="url" className="form-control" id="website" value = {customerProfile.profile_picture} />
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
                                            <input type="name" className="form-control" id="Street" value = {customerProfile.address.street_address} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="ciTy">City</label>
                                            <input type="name" className="form-control" id="ciTy" value={customerProfile.address.city} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="sTate">State</label>
                                            <input type="text" className="form-control" id="sTate" value ={customerProfile.address.state}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="zIp">Zip Code</label>
                                            <input type="text" className="form-control" id="zIp" value ={customerProfile.address.zipcode1} />
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
                                            <input type="name" className="form-control" id="last4digits" value = {customerProfile.credit_card_info.last4digits} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="expiration">Expiration Date</label>
                                            <input type="name" className="form-control" id="expiration" value = {customerProfile.credit_card_info.expiration} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="securityCode">Security Code</label>
                                            <input type="text" className="form-control" id="securityCode" value = {customerProfile.credit_card_info.security_code} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="zIpCode">Zip Code</label>
                                            <input type="text" className="form-control" id="zIpCode" value = {customerProfile.credit_card_info.zipcode2} />
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