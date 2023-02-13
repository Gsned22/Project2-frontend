import React, { useState } from 'react';
import axios from 'axios';

// Defining the props object to contain a refreshReimbursements property which is a function that accepts 0 arguments
// and returns nothing
function UpdateProducts(props: { refreshProducts: () => void }) {
    const [product_name, setProduct_Name] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [inventory_count, setInventory_Count] = useState(0);
    const [price, setPrice] = useState(0);

    async function addProduct() {
        try {
            const response = await axios.post('http://127.0.0.1:8080/products', { "description": description, "image": image, "inventory_count": inventory_count, "product_name": product_name, "price": price }, {
            });
            const message = response.data.message;
            alert(message);       
            props.refreshProducts();
        } catch (err) {
            alert(err);
        }
    }

    return (
        <>
            <form onSubmit={(event) => { event.preventDefault() }}>
                <label className='productUpdates' htmlFor="product_name">Product Name</label>
                <input onChange={(e) => { setProduct_Name(e.target.value) }} value={product_name} type="text" id="product_name" name="product_name" />
                <label className='productUpdates' htmlFor="description">Description</label>
                <input onChange={(e) => { setDescription(e.target.value) }} value={description} type="text" id="description" name="description" />                
                <label className='productUpdates' htmlFor="image">Image</label>
                <input onChange={(e) => { setImage(e.target.value) }} value={image} type="text" id="image" name="image" />
                <label className='productUpdates' htmlFor="inventory_count">Inventory Count</label>
                <input onChange={(e) => { setInventory_Count(Number(e.target.value)) }} value={inventory_count} type="number" id="inventory_count" name="inventory_count" />
                <label className='productUpdates' htmlFor="price">Price</label>
                <input onChange={(e) => { setPrice(Number(e.target.value)) }} value={price} type="number" id="price" name="price" />

                <button onClick={addProduct}>Submit</button>
            </form>
        </>
    )
}

export default UpdateProducts;