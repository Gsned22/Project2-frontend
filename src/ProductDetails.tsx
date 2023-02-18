import axios from "axios";
import React, { useEffect, useState } from "react"
import {useLocation, useNavigate} from "react-router-dom"

function ProductDetails() {
    const [product_number, setProductNumber] = useState('');
    const [product_name, setProductName] = useState('');
    const [description, setDescription] = useState('');

    const location = useLocation();

    const navigate = useNavigate();

    useEffect(() => {
        retrieveBook();
    }, [])

    function returnToProducts() {  
        return navigate("/");
    }
    async function retrieveBook() {
        const response = await axios.get(`http://127.0.0.1:8080${location.pathname}`);
        setProductNumber(response.data.product_number);
        setProductName(response.data.product_name);
        setDescription(response.data.description);
    }
    
    return (
        <>
            <h1>Product Details</h1>
            <h2>Product Name</h2>
            <p>{product_name}</p>
            <h3>Product Number</h3>
            <p>{product_number}</p>
            <h3>Description</h3>
            <p>{description}</p>
            <div className='buttonOnDetailsPage'>
            <button className='returnToProductsButton' onClick={() => { returnToProducts() }}>Back to Products</button>
            </div>
        </>
    )
}

export default ProductDetails