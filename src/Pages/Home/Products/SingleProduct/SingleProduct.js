import React, { useContext, useState } from 'react'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../Cart/CartContext/CartContext';
import './SingleProduct.css'

const SingleProduct = ({product}) => {
    const {img, name, description, price} =product;
   
    const [isAdding, setAdding] = useState(false)
    const {cart, setCart} = useContext(CartContext);

    
    const addToCart = (event, product) =>{
        event.preventDefault()
       
        let _cart = {...cart};
        if(!_cart.items){
           _cart.items = {}
        }
        if(_cart.items[product._id]){
            _cart.items[product._id] += 1;
        }
        else{
            _cart.items[product._id] = 1;
        }
        if(!_cart.totalItems){
            _cart.totalItems = 0;
        }
        _cart.totalItems +=1;
        setCart(_cart);
    }

    //     if(_cart.totalItems){
    //         _cart.totalItems = 0;
    //     }
    //     _cart.totalItems += 1;
    //     setCart(_cart);
    //     console.log(product);
    //     const cart = {
    //         items:{
    //             "61bb6902d8d93dd5d16aa929":2,
    //             "61bb6984d8d93dd5d16aa92a":3
    //         },
    //         totalItem: 5
    //     }
    // }
    return (

<Link to={`/products/${product._id}`} className='card-design mt-5 rounded col-lg-4 col-md-6 col-12'>
        <div>
        <div className='container'>
         <Col>
            <Card className="text-center" style={{ width: '25rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>{price}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
              <span className='bg'>Large</span><br/>
           <div className='card-item mt-3'>
             <span>{price}</span>
            <button onClick={(e) =>{ addToCart(e, product)} } className='add-btn fw-bold'>ADD</button>
           </div>
      </Card.Body>
  </Card>
     </Col>
     </div>
        </div>
    </Link>

    )
}

export default SingleProduct
