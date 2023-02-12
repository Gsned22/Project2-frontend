import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Home() {

    const [books, setBooks] = useState<{
        product_number: string,
        description: string,
        image: string,
        in_stock: boolean,
        price: number
        product_name: string }[]>([]);

    useEffect(() => {
        retrieveBooks();
    }, [])

    async function retrieveBooks() {
        const response = await axios.get('http://127.0.0.1:8080/products');
        setBooks(response.data.Items);
        console.log(await axios.get('http://127.0.0.1:8080/covers'));
    }

    return ( 
        <>
            <h1>Welcome to Alchemy Booksellers</h1>
            <h2>Products</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product Number</th>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((books) => {
                        return (
                            <tr key={books.product_number}>
                                <td>{books.product_number}</td>
                                <td>{books.product_name}</td>
                                <td>{books.description}</td>
                                <td>{books.price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Home;