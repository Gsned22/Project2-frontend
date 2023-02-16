import axios from "axios";
import React, { useEffect, useState } from "react"
import {useLocation, useNavigate} from "react-router-dom"

function ProductDetails() {
    const [product_name, setProductName] = useState('');
    const [description, setDescription] = useState('');

    const location = useLocation();

    useEffect(() => {
        retrieveBook();
    }, [])

    async function retrieveBook() {
        const response = await axios.get(`http://127.0.0.1:8080${location.pathname}`);
        setProductName(response.data.product_name);
        setDescription(response.data.description);
    }
    
    return (
        <>
            <h1>Product Details</h1>
            <h2>Product Name</h2>
            <p>{product_name}</p>
            <h2>Description</h2>
            <p>{description}</p>
        </>
    )
}

export default ProductDetails