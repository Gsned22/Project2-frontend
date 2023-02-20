import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { formatCurrency } from './formatCurrency';

function ReviewOrders() {

    const [orders, setOrders] = useState<{
        items: {
            price: number,
            quantity: number,
            product_name: string,
            product_number: string
        }[],
        order_id: string,
        timestamp: number,
        username: string }[]>([]);

    const location = useLocation();
    const navigate = useNavigate();

    function returnToProducts() {  
        return navigate("/");
    }

    function goToUserProfile() {  
        let token = localStorage.getItem('token') || '{}';
        const payload: { iat: number, role: string, username: string } = jwtDecode(token);  
        if (payload.role === 'user') {
            return navigate("/customer/profile");
        } else {
            alert('As a guest, you have no profile.')
            return navigate("/");
        }
    }

    useEffect(() => {
        viewPreviousOrders();
    }, [])

    async function viewPreviousOrders() {
        try {
            const response = await axios.get(`http://127.0.0.1:8080${location.pathname}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}` 
                }
            });
            setOrders(response.data);
        } catch (err: any) {
            alert(err.response.data.message);
        }
    }

    return (
        <>
            <h1>Previous Orders</h1>
            <h1>Thank you for your orders!</h1>
                <div className='buttonsOnOrdersPage'>
                    <button className='returnToProductsButton' onClick={() => { returnToProducts() }}>Shop More</button>
                    <button className='goToUserProfileButton' onClick={() => { goToUserProfile() }}>Go to Your Customer Profile</button>
                </div>
            <table className='ordersTable'>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Contents</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((orders) => {
                        return (
                            <tr key={orders.order_id}>
                                <td className='ordersData'>{orders.order_id}</td>
                                <td className='ordersData'>{orders.items.map((innerMap) => {
                                    return (
                                        <tr key={innerMap.product_number}>
                                            <td><pre>product #{innerMap.product_number},</pre></td>
                                            <td><pre>{innerMap.product_name}, </pre></td>
                                            <td><pre>{formatCurrency(innerMap.price)} </pre></td>
                                            <td><pre>x {innerMap.quantity}</pre></td>
                                        </tr>
                                    )
                                })}</td>
                                <td className='ordersData'>{new Intl.DateTimeFormat
                                ('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(orders.timestamp * 1000)}</td>
                            </tr>                  
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ReviewOrders