import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from './formatCurrency';

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
        } catch (err: any) {
            alert(err.response.data.message);
        }
    }

    async function backToProducts() {  
        return navigate("/");
    }

    async function proceedToCheckout() {  
        return navigate("/checkout");
    }
    
  return (
    <>
        <h1>Cart</h1>
        <table className='cartTable'>
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
                            <td>{formatCurrency(cart.price)}</td>
                            <td>{cart.quantity}</td>
                            <td>{formatCurrency(cart.price * cart.quantity)}</td>
                        </tr>                  
                    )
                })}
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className='total'>TOTAL</td>
                    <td className='total'>{ formatCurrency(cart.reduce(function (previousValue, currentValue) {
                            return previousValue + currentValue.quantity * currentValue.price;
                        }, 0))}
                    </td>
                </tr>
            </tbody>
        </table>
                        { cart.reduce(function (previousValue, currentValue) {
                            return previousValue + currentValue.quantity * currentValue.price;
                        }, 0) > 0 ? 
            <>
                <div className='buttonsOnCartPage'><button className='returnToProductsButton' onClick={() => { backToProducts() }}>Return to Products Page</button>
                    <button className='proceedToCheckoutButton' onClick={() => { proceedToCheckout() }}>Proceed To Checkout Page</button>
                </div>
            </> :
                <><div className='buttonsOnCartPage'><button className='returnToProductsButton' onClick={() => { backToProducts() }}>Return to Products Page</button></div></>}
    </>
    )
}

export default Cart