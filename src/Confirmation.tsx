import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function Confirmation() {

    const navigate = useNavigate();

    function returnToProducts() {  
        return navigate("/");
    }

    function goToUserProfile() {  
        return navigate("/customer/profile");
    }

    function reviewPriorOrders() {  
        let token = localStorage.getItem('token') || '{}';
        const payload: { iat: number, role: string, username: string } = jwtDecode(token);
        return navigate(`/orders/${payload.username}`);
    }

    return (
    <>
        <h1>Thank you for your order!</h1>
        <div className='buttonsOnConfirmationPage'>
            <button className='returnToProductsButton' onClick={() => { returnToProducts() }}>Shop More</button>
            <button className='goToUserProfileButton' onClick={() => { goToUserProfile() }}>Go to Your Customer Profile</button>
            <button className='reviewOrders' onClick={() => { reviewPriorOrders() }}>Review Your Prior Orders</button>
        </div>
    </>
    )
}

export default Confirmation