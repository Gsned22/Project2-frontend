import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateProducts from './UpdateProducts';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function Admin() {

    const [books, setBooks] = useState<{
        product_number: string,
        description: string,
        image: string,
        inventory_count: number,
        price: number
        product_name: string }[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        retrieveBooksAdmin();
    }, [])

    async function retrieveBooksAdmin() {
        const response = await axios.get('http://127.0.0.1:8080/products');
        let token = localStorage.getItem('token') || '{}';
        const payload: { iat: number, role: string, username: string } = jwtDecode(token);
        if (payload.role === 'admin') {
            setBooks(response.data.Items);
        } else {
            return navigate("/");
        }
    }

    return ( 
        <>
            <h1 id='adminUpdates'>Admin Products Update Page</h1>
            <h4>If adding a new product, leave Product Number blank and it will be randomly assigned.</h4>
            <h4>If updating existing product info, include the Product Number along with any fields you wish to update.</h4>
            <UpdateProducts refreshProducts={retrieveBooksAdmin} />
            <table className='adminTable'>
                <thead>
                    <tr>
                        <th>Product Number</th>
                        <th>Cover Art</th>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Inventory Count</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((books) => {
                        return (
                            <tr key={books.product_number}>
                                <td>{books.product_number}</td>
                                <td><img className='resize' src={books.image} alt="product"/></td>
                                <td>{books.product_name}</td>
                                <td>{books.description}</td>
                                <td>{books.price}</td>
                                <td>{books.inventory_count}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Admin;