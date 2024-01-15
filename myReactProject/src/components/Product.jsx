import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import {add} from '../store/cartSlice';

const Product = () => {


const [products , getProducts] =useState([]);
const arr=["a","b","c","d","e","f","g","h"];
const dispatch=useDispatch();

useEffect(() =>{

  axios.get("https://fakestoreapi.com/products").then((response) => {
  console.log(response.data);
  //setResultArry(response.data);
  getProducts(response.data);
  //response.data.then(result => getProducts);
  
  
  });
  
  },[])
const addToCart=(prod)=>{
  //dispatch an add action 
  dispatch(add(prod))
}


  return (
    <Fragment>

<div className='row'>
  <h1>Products</h1>
{products.map((value, index)=>
<div key={index} className='col-md-3' style={{marginBottom:'10px'}}>

<Card key={value.key} className='h-100'>

  <div className='text-center'>
      <Card.Img variant="top" src={value.image} style={{width :'100px', height:'130px' }}/>
      </div>
      <Card.Body>
        <Card.Title>{value.title}</Card.Title>
        <Card.Text>
         {value.price}
        </Card.Text>
        
      </Card.Body>
      <Card.Footer style={{backgroundColor:'white'}}>
      <Button variant="primary" onClick={()=>addToCart(value)}>Add to My Bag</Button>
      </Card.Footer>
    </Card>

  </div>

)}
</div>

    </Fragment>
  )
}

export default Product