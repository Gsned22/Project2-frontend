import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap'
import { formatCurrency } from './formatCurrency';

function Home() {

    const [books, setBooks] = useState<{
        product_number: string,
        image: string,
        inventory_count: number,
        price: number,
        product_name: string }[]>([]);

    const [count, setCount] = useState(0);

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
            setCount(count + 1);
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
            setCount(count - 1);
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
            <img className='mainImage' src='booksImage.png' alt='cartoon books'/>
            <h1 className='welcome'>Welcome to Alchemy Booksellers</h1>
            <table className='productsTable'>
                <thead>
                    <tr><th>Product Name</th>
                        <th>Cover Art</th>
                        <th>Price</th>
                        <th>Inventory Count</th>
                        <th>
                        <div><Button onClick={() => { viewCart() }} style={{width: '4rem', height: '4rem', position: 'relative'}}
                            variant='outline-primary @mixin border-radius: 4px'
                            className='rounded-circle'>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                fill="yellow">
                                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                                </svg>
                            <div className='rounded-circle bg-danger d-flex justify-content-center align-items center'
                                style={{
                                    fontFamily: 'arial',
                                    color: 'yellow',
                                    width: '1.5rem',
                                    height: '1.5rem',
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                    transform: 'translate(25%, 25%)'}}>{count}
                        </div></Button></div>
                        </th>
                    </tr>
                </thead>
                <tbody>{books.map((books) => {
                        return (
                            <tr key={books.product_number}>
                                <td><Link className='linkToDetailsPage' to={`/products/${books.product_number}`}>{books.product_name}</Link></td>
                                <td><img className='resize' src={books.image} alt="product"/></td>
                                <td>{formatCurrency(books.price)}</td>
                                <td>{books.inventory_count}</td>
                                {books.inventory_count > 0 ? 
                                <>
                                    <td><button onClick={() => { addToCart(books.product_number) }}>Add To Cart</button></td>
                                    <td><button onClick={() => { removeFromCart(books.product_number) }}>Remove From Cart</button></td>
                                </> :
                                <><td id='outOfStock'>Out of stock</td><td><button onClick={() => { removeFromCart(books.product_number) }}>Remove From Cart</button></td></>}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className='attribution'>Image by rawpixel.com</div>
        </>
    )
}

export default Home;