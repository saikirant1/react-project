import { useDispatch, useSelector } from "react-redux";
import { json } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Product from "./Product";
import {remove} from '../store/cartSlice';
const Cart = ()=>{

    const productCart=useSelector(store=>store.cart);
    const dispatch = useDispatch();
    const removeToCart=(id)=>{
        //disptach a move action
        alert(id);
        dispatch(remove(id));
    }
    //const dispatch=useDispatch();
    //console.log(productCart);
    return (
        <>
        <h1>Products Cart</h1>
        <div className='row'>
        {productCart.map((value, index)=>
        <div key={index} className='col-md-12' style={{marginBottom:'10px'}}>

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
            <Button variant="danger" onClick={()=>removeToCart(value.id)}>Remove Item</Button>
            </Card.Footer>
            </Card>

        </div>

        )}
        </div>
        </>
    )
}
export default Cart;