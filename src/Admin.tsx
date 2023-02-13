import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateProducts from './UpdateProducts';

function Admin() {

    const [books, setBooks] = useState<{
        product_number: string,
        description: string,
        image: string,
        inventory_count: number,
        price: number
        product_name: string }[]>([]);

    useEffect(() => {
        retrieveBooks();
    }, [])

    async function retrieveBooks() {
        const response = await axios.get('http://127.0.0.1:8080/products');
        setBooks(response.data.Items);
    }

    return ( 
        <>
            <h1 id='adminUpdates'>Admin Products Update Page</h1>
            <UpdateProducts refreshProducts={retrieveBooks} />
            <table>
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