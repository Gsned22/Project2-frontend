import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CustomerProfile() {
    const [customerProfile, setCustomerProfile] = useState<{ 
        username: string, 
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
        role: string}>([] as any);

    useEffect(() => {
        retrieveCustomerProfile();
    }, [])

    async function retrieveCustomerProfile() {
        const response = await axios.get('http://127.0.0.1:8080/customer/profile',{
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
              
            }
            
        });
        
        setCustomerProfile(response.data);
        console.log(response.data) // update the state
    }

    return (
        <>
        <h1>Profile Page</h1>
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Street Address</th>
                    <th>Zip Code</th>
                    <th>Expiration</th>
                    <th>Last 4 digits</th>
                    <th>Security Code</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Password</th>
                    <th>Phone Number</th>
                    <th>Profile Picture</th>
                </tr>
            </thead>
            <tbody>
               
                        <tr >
                            <td>{customerProfile.username}</td>
                            <td>{customerProfile.city}</td>
                            <td>{customerProfile.state}</td>
                            <td>{customerProfile.street_address}</td>
                            <td>{customerProfile.zipcode1}</td>
                            <td>{customerProfile.expiration}</td>
                            <td>{customerProfile.last4digits}</td>
                            <td>{customerProfile.security_code}</td>
                            <td>{customerProfile.email}</td>
                            <td>{customerProfile.full_name}</td>
                            <td>{customerProfile.password}</td>
                            <td>{customerProfile.phone_number}</td>
                            <td>{customerProfile.profile_picture}</td>
                            <td>{customerProfile.zipcode2}</td>
                        </tr>                  
               
            </tbody>
        </table>
    </>
    )
}

export default CustomerProfile;