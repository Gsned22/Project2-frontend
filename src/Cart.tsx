import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Cart() {

    const [cart, setCart] = useState<{
        product_number: string,
        product_name: string,
        price: number,
        quantity: number }[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        viewItemsInCart();
    }, [])

    async function viewItemsInCart() {
        try {
            const response = await axios.get('http://127.0.0.1:8080/cart', {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}` // send employee token, so it will only
                    // retrieve that specific employee's reimbursements
                }
            });
            setCart(response.data);
        } catch (err) {
            alert(err);
        }
    }

    async function backToProducts() {  
        return navigate("/");
    }
    
  return (
    <>
        <h1>Cart</h1>
        <table>
            <thead>
                <tr>
                    <th>Product Number</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Item Total</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((cart) => {
                    return (
                        <tr key={cart.product_number}>
                            <td>{cart.product_number}</td>
                            <td>{cart.product_name}</td>
                            <td>{cart.price}</td>
                            <td>{cart.quantity}</td>
                            <td>{cart.price * cart.quantity}</td>
                        </tr>                  
                    )
                })}
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>TOTAL</td>
                </tr>
            </tbody>
        </table>
        <button onClick={() => { backToProducts() }}>Return to Products Page</button>
    </>
    )
}

export default Cart