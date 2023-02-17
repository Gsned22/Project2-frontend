import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CustomerProfile() {
    const [customerProfile, setCustomerProfile] = useState<{
        username: string,
        address: string,
        city: string,
        state: string,
        street_address: string,
        zipcode1: number,
        expiration: number,
        last4digits: number,
        security_code: number,
        zipcode2: number,
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
        console.log(response.data.address.street_address)
        // console.log(customerProfile.address.street_address)
      
    }

    const [username, setUsername] = useState({});
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

    async function updateUserProfile() {
        try {

            const response = await axios.patch('http://127.0.0.1:8080/customer/profile', {
                'username': username,
                'street_address': street_address,
                'city': city, 'state': state, 'zipcode1': zipcode1,
                'email': email, 'full_name': full_name, 'profile_picture': profile_picture,
                'password': password, 'phone_number': phone_number
            });

            if (response.status === 200) {

                const message = response.data.message;
                console.log(response);
                alert(message);
            }
            retrieveCustomerProfile();
            
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
                                            <input value={full_name}type="text" className="form-control" id="fullName" placeholder={customerProfile.full_name} required onChange={(e) => { setFullName(e.currentTarget.value) }}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="eMail">Email</label>
                                            <input type="email" className="form-control" id="eMail" placeholder={customerProfile.email} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input type="number" className="form-control" id="phone" placeholder= {customerProfile.phone_number as any as string}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="website">Profile Picture URL</label>
                                            <input type="url" className="form-control" id="website" placeholder="insert picture url" />
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
                                            <input type="name" className="form-control" id="Street" placeholder={customerProfile.street_address} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="ciTy">City</label>
                                            <input type="name" className="form-control" id="ciTy" placeholder={customerProfile.city} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="sTate">State</label>
                                            <input type="text" className="form-control" id="sTate" placeholder={customerProfile.state} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="zIp">Zip Code</label>
                                            <input type="text" className="form-control" id="zIp" placeholder={customerProfile.zipcode1 as any as string} />
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
                                            <input type="name" className="form-control" id="last4digits" placeholder={customerProfile.last4digits as any as string} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="expiration">Expiration Date</label>
                                            <input type="name" className="form-control" id="expiration" placeholder={customerProfile.expiration as any as string} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="securityCode">Security Code</label>
                                            <input type="text" className="form-control" id="securityCode" placeholder={customerProfile.security_code as any as string} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="zIpCode">Zip Code</label>
                                            <input type="text" className="form-control" id="zIpCode" placeholder={customerProfile.zipcode2 as any as string} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="text-right">
                                            <button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button>
                                            <button type="submit" id="submit" name="submit" className="btn btn-primary"  onClick={updateUserProfile}>Update</button>
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