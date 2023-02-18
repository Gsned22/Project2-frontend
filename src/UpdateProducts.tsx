import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Defining the props object to contain a refreshReimbursements property which is a function that accepts 0 arguments
// and returns nothing
function UpdateProducts(props: { refreshProducts: () => void }) {
    const [product_number, setProduct_Number] = useState('');
    const [product_name, setProduct_Name] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [inventory_count, setInventory_Count] = useState(0);
    const [price, setPrice] = useState(0);

    async function updateOrAddProduct() {
        try {
            const response = await axios.post('http://127.0.0.1:8080/products', { "product_number": product_number, "description": description, "image": image, "inventory_count": inventory_count, "product_name": product_name, "price": price }, {
            });
            const message = response.data.message;
            alert(message);       
            props.refreshProducts();
        } catch (err) {
            alert(err);
        }
    }

    return (
        <Container>
            <Wrapper>
                <Form onSubmit={(event) => { event.preventDefault() }}>
                    <InputWrapper>
                <Label htmlFor="product_number">Product Number</Label>
                <Input onChange={(e) => { setProduct_Number(e.target.value) }} value={product_number} type="text" id="product_number" name="product_number" />
                <Label htmlFor="product_name">Product Name</Label>
                <Input onChange={(e) => { setProduct_Name(e.target.value) }} value={product_name} type="text" id="product_name" name="product_name" />
                <Label htmlFor="description">Description</Label>
                <Input onChange={(e) => { setDescription(e.target.value) }} value={description} type="text" id="description" name="description" />            
                    </InputWrapper>
                    <InputWrapper>                               
                <Label htmlFor="image">Image</Label>
                <Input onChange={(e) => { setImage(e.target.value) }} value={image} type="text" id="image" name="image" />
                <Label htmlFor="inventory_count">Inventory Count</Label>
                <Input onChange={(e) => { setInventory_Count(Number(e.target.value)) }} value={inventory_count} type="number" id="inventory_count" name="inventory_count" />
                <Label htmlFor="price">Price</Label>
                <Input onChange={(e) => { setPrice(Number(e.target.value)) }} value={price} type="number" id="price" name="price" />
                </InputWrapper>
                <ButtonWrapper>               
                    <button onClick={updateOrAddProduct}>Submit</button>
                </ButtonWrapper>               
                </Form>
            </Wrapper>
        </Container>
    )
}

export default UpdateProducts;

const Container = styled.div`
height: 30vh;
width: 100vw;
text-align: center;
display: flex;
justify-content: center;
align-items: center;

`
const Wrapper = styled.div`
display: flex;
padding: 70px;
max-height: 400px;
border-radius: 20px;
align-items: center;
flex-direction: column;
margin-top: -140px;
    
`

const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
padding: 6rem;
    
`

const InputWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
  

`

const Label = styled.label`
display: flex;
color: rgb(255, 166, 0);
margin-left: 10px;
`

const Input = styled.input`
padding: 0.5rem;
margin: 0.5rem 0.25rem;
border-radius: 5px;
border: none;
`
    
const ButtonWrapper = styled.div`
margin-top: 20px;
margin-left: 10px;

`