import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {

    const [books, setBooks] = useState<{
        product_number: string,
        description: string,
        image: string,
        inventory_count: number,
        price: number,
        product_name: string }[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        retrieveBooks();
    }, [])

    async function retrieveBooks() {
        const response = await axios.get('http://127.0.0.1:8080/products');
        setBooks(response.data.Items);
    }

    async function addToCart(product_number: any) {
        const response = await axios.post(`http://127.0.0.1:8080/cart`, { "product_number": product_number }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 201) {
            const message = response.data.message;
            alert(message);
        }

        retrieveBooks();
    }

    async function removeFromCart(product_number: any) {
        const response = await axios.patch(`http://127.0.0.1:8080/cart`, { "product_number": product_number }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 201) {
            const message = response.data.message;
            alert(message);
        }

        retrieveBooks(); 
    }

    async function viewCart() {  
        return navigate("/cart");
    }

    return ( 
        <>
            <h1 className='welcome'>Welcome to Alchemy Booksellers</h1>
            <h2>Products</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product Number</th>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Inventory Count</th>
                        <th>Picture</th>
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
                                <td>{books.inventory_count}</td>
                                <td>{books.image}</td>
                                {books.inventory_count > 0 ? 
                                <>
                                    <td><button onClick={() => { addToCart(books.product_number) }}>Add To Cart</button></td>
                                    <td><button onClick={() => { removeFromCart(books.product_number) }}>Remove From Cart</button></td>
                                </> :
                                <><td className='outOfStock'>Out of stock</td><td><button onClick={() => { removeFromCart(books.product_number) }}>Remove From Cart</button></td></>}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button onClick={() => { viewCart() }}>View Cart</button>
        </>
    )
}

export default Home;